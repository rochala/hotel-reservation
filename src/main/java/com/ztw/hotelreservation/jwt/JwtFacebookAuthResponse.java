package com.ztw.hotelreservation.jwt;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class JwtFacebookAuthResponse {

    @NonNull
    private String accessToken;
    @NonNull
    private boolean registration;
    private String tokenType = "Bearer";
    @NonNull
    private String name;
    @NonNull
    private String surname;
}
