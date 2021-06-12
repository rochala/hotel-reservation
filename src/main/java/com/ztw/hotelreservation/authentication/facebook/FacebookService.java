package com.ztw.hotelreservation.authentication.facebook;


import com.ztw.hotelreservation.authentication.ApplicationUserDetails;
import com.ztw.hotelreservation.authentication.ApplicationUserService;
import com.ztw.hotelreservation.jwt.JwtTokenProvider;
import com.ztw.hotelreservation.model.User;
import com.ztw.hotelreservation.security.ApplicationUserRole;
import com.ztw.hotelreservation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
public class FacebookService {
    @Autowired
    private FacebookClient facebookClient;
    @Autowired
    private UserService userService;
    @Autowired private JwtTokenProvider tokenProvider;

    public String loginUser(String fbAccessToken) {
        var facebookUser = facebookClient.getUser(fbAccessToken);

        return userService.findByUsername(facebookUser.getEmail())
                .or(() -> Optional.ofNullable(userService.registerUser(convertTo(facebookUser), ApplicationUserRole.FACEBOOK_CLIENT)))
                .map(ApplicationUserDetails::new)
                .map(userDetails -> new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()))
                .map(tokenProvider::generateToken)
                .orElseThrow(() ->
                        new RuntimeException("unable to login facebook user id " + facebookUser.getId()));
    }

    public boolean userNeedsDetails(String fbAccessToken){
        var facebookUser = facebookClient.getUser(fbAccessToken);
        Optional<User> userOptional = userService.findByUsername(facebookUser.getEmail());
        if (userOptional.isPresent()) {
            if (userOptional.get().getRole().equals("FACEBOOK_CLIENT"))
                return true;
            else
                return false;
        } else {
            return true;
        }
    }

    public String getName(String fbAccessToken){
        var facebookUser = facebookClient.getUser(fbAccessToken);
        return userService.findByUsername(facebookUser.getEmail()).get().getName();
    }

    public String getSurname(String fbAccessToken){
        var facebookUser = facebookClient.getUser(fbAccessToken);
        return userService.findByUsername(facebookUser.getEmail()).get().getSurname();
    }

    private User convertTo(FacebookUser facebookUser) {
        return User.builder()
                .id((long) facebookUser.getId().hashCode())
                .username(facebookUser.getEmail())
                .password(generatePassword(8))
                .name(facebookUser.getFirstName())
                .surname(facebookUser.getLastName())
                .build();
    }

    private String generateUsername(String firstName, String lastName) {
        Random rnd = new Random();
        int number = rnd.nextInt(999999);

        return String.format("%s.%s.%06d", firstName, lastName, number);
    }

    private String generatePassword(int length) {
        String capitalCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        String specialCharacters = "!@#$";
        String numbers = "1234567890";
        String combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
        Random random = new Random();
        char[] password = new char[length];

        password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
        password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
        password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
        password[3] = numbers.charAt(random.nextInt(numbers.length()));

        for(int i = 4; i< length ; i++) {
            password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
        }
        return new String(password);
    }

}
