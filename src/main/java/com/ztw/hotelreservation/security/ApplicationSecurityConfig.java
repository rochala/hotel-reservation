package com.ztw.hotelreservation.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import static com.ztw.hotelreservation.security.ApplicationUserPermission.CLIENT_WRITE;
import static com.ztw.hotelreservation.security.ApplicationUserRole.*;

@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()   // TODO: Work on CSRF Tokens processing
                .authorizeRequests()
                .antMatchers("/home", "/healthcheck").permitAll()
                .antMatchers("/receptionistPanel").hasRole(STAFF.name())
                .antMatchers("/adminPanel").hasRole(ADMIN.name())
                .antMatchers(HttpMethod.GET, "/profile").hasAnyRole(CLIENT.name(), STAFF.name())
                .antMatchers(HttpMethod.POST, "/profile").hasAuthority(CLIENT_WRITE.getPermission())
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginPage("/login").permitAll();
    }

    @Override
    @Bean
    protected UserDetailsService userDetailsService() {
        UserDetails adminUser = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("admin"))
                .authorities(ADMIN.getGrantedAuthorities())
                .build();

        UserDetails receptionistUser = User.builder()
                .username("receptionist")
                .password(passwordEncoder.encode("receptionist"))
                .authorities(STAFF.getGrantedAuthorities())
                .build();

        UserDetails clientUser = User.builder()
                .username("client")
                .password(passwordEncoder.encode("client"))
                .authorities(CLIENT.getGrantedAuthorities())
                .build();

        return new InMemoryUserDetailsManager(
                adminUser,
                receptionistUser,
                clientUser
        );
    }
}
