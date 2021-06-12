package com.ztw.hotelreservation.jwt;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class JwtTokenResponse {

    @NonNull
    private String accessToken;
    private String tokenType = "Bearer";
}
