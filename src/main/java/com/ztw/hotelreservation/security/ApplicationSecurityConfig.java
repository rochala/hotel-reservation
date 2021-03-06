package com.ztw.hotelreservation.security;

import com.ztw.hotelreservation.jwt.JwtConfig;
import com.ztw.hotelreservation.jwt.JwtTokenVerifier;
import com.ztw.hotelreservation.jwt.JwtUsernamePasswordAuthFilter;
import com.ztw.hotelreservation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.crypto.SecretKey;

import static com.ztw.hotelreservation.security.ApplicationUserPermission.CLIENT_WRITE;
import static com.ztw.hotelreservation.security.ApplicationUserRole.*;

@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;
    private final SecretKey secretKey;
    private final JwtConfig jwtConfig;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder, UserDetailsService userDetailsService, UserRepository userRepository, SecretKey secretKey, JwtConfig jwtConfig) {
        this.passwordEncoder = passwordEncoder;
        this.userDetailsService = userDetailsService;
        this.userRepository = userRepository;
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
                .cors().and()
                .addFilter(new JwtUsernamePasswordAuthFilter(authenticationManager(), jwtConfig, secretKey))
                .addFilterAfter(new JwtTokenVerifier(jwtConfig, secretKey, userRepository), JwtUsernamePasswordAuthFilter.class)
                .authorizeRequests()
                .antMatchers("/", "/home", "/healthcheck", "/register", "/swagger-ui.html", "/login", "/facebook/login").permitAll()
                .antMatchers("/facebook/registrationdetails").hasRole(PREREGISTERED_CLIENT.name())
                .antMatchers("/receptionistPanel").hasRole(STAFF.name())
                .antMatchers("/adminPanel").hasRole(ADMIN.name())
                .antMatchers(HttpMethod.GET, "/rooms/{floor}/{start}/{end}").permitAll()
                .antMatchers(HttpMethod.GET, "/profile").hasAnyRole(CLIENT.name(), STAFF.name(), FACEBOOK_CLIENT.name(), PREREGISTERED_CLIENT.name())
                .antMatchers(HttpMethod.POST, "/profile", "/updateProfile", "/reservation").hasAuthority(CLIENT_WRITE.getPermission())
                .antMatchers(HttpMethod.GET,  "/reservation").hasAuthority(CLIENT_WRITE.getPermission())
                .antMatchers(HttpMethod.DELETE, "/reservation").hasAnyRole(CLIENT.name(), FACEBOOK_CLIENT.name())
                .anyRequest()
                .authenticated();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration corsConfiguration = new CorsConfiguration().applyPermitDefaultValues();
        corsConfiguration.addAllowedMethod(HttpMethod.DELETE);
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
