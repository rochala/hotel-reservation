package com.ztw.hotelreservation.security;

import com.ztw.hotelreservation.jwt.JwtConfig;
import com.ztw.hotelreservation.jwt.JwtTokenVerifier;
import com.ztw.hotelreservation.jwt.JwtUsernamePasswordAuthFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.crypto.SecretKey;

import static com.ztw.hotelreservation.security.ApplicationUserPermission.CLIENT_WRITE;
import static com.ztw.hotelreservation.security.ApplicationUserRole.*;

@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final UserDetailsService userDetailsService;
    private final SecretKey secretKey;
    private final JwtConfig jwtConfig;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder, UserDetailsService userDetailsService, SecretKey secretKey, JwtConfig jwtConfig) {
        this.passwordEncoder = passwordEncoder;
        this.userDetailsService = userDetailsService;
        this.secretKey = secretKey;
        this.jwtConfig = jwtConfig;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()   // TODO: Work on CSRF Tokens processing
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new JwtUsernamePasswordAuthFilter(authenticationManager(), jwtConfig, secretKey))
                .addFilterAfter(new JwtTokenVerifier(jwtConfig, secretKey), JwtUsernamePasswordAuthFilter.class)
                .authorizeRequests()
                .antMatchers("/home", "/healthcheck").permitAll()
                .antMatchers("/receptionistPanel").hasRole(STAFF.name())
                .antMatchers("/adminPanel").hasRole(ADMIN.name())
                .antMatchers(HttpMethod.GET, "/profile").hasAnyRole(CLIENT.name(), STAFF.name())
                .antMatchers(HttpMethod.POST, "/profile").hasAuthority(CLIENT_WRITE.getPermission())
                .anyRequest()
                .authenticated();
    }
}
