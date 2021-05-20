package com.ztw.hotelreservation.authentication;

import com.ztw.hotelreservation.model.User;
import com.ztw.hotelreservation.security.ApplicationUserRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

public class ApplicationUserDetails implements UserDetails {

    private final List<? extends GrantedAuthority> grantedAuthorities;
    private final String password;
    private final String username;
    private final boolean active;

    public ApplicationUserDetails(User userModel) {
        this.username = userModel.getUsername();
        this.password = userModel.getPassword();
        this.grantedAuthorities = new ArrayList<>(Enum.valueOf(ApplicationUserRole.class, userModel.getRole()).getGrantedAuthorities());
        this.active = userModel.isActive();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}
