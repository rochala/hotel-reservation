package com.ztw.hotelreservation.security;

import com.google.common.collect.Sets;

import java.util.Set;

import static com.ztw.hotelreservation.security.ApplicationUserPermission.*;

public enum ApplicationUserRole {
    CLIENT(Sets.newHashSet(CLIENT_READ, CLIENT_WRITE, RESERVATION_READ, RESERVATION_WRITE)),
    STAFF(Sets.newHashSet(CLIENT_READ, RESERVATION_READ, RESERVATION_WRITE)),
    ADMIN(Sets.newHashSet(HOTEL_WRITE));

    private final Set<ApplicationUserPermission> permissions;

    ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }
}
