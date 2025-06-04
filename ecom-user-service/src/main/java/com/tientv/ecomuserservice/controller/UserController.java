package com.tientv.ecomuserservice.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.SessionCookieOptions;
import com.tientv.ecomuserservice.model.User;
import com.tientv.ecomuserservice.repository.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseCookie;
import org.springframework.web.bind.annotation.*;
import java.time.Duration;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/google")
    void login(@RequestBody Map<String, String> body, HttpServletResponse response) throws Exception {
        FirebaseToken ft = FirebaseAuth.getInstance().verifyIdToken(body.get("idToken"));

        UUID uid = UUID.fromString(ft.getUid());
        userRepository.findByFirebaseId(uid)
                .orElseGet(() -> userRepository.save(new User(uid, ft.getName(),
                        ft.getPicture(), "BUYER")));

        String cookie = FirebaseAuth.getInstance()
                .createSessionCookie(body.get("idToken"),
                        SessionCookieOptions.builder().setExpiresIn(1209600000).build());

        response.addHeader("Set-Cookie",
                ResponseCookie.from("fb_session", cookie)
                        .httpOnly(true).secure(true).sameSite("Strict")
                        .path("/").maxAge(Duration.ofDays(14)).build().toString());
    }

    @PostMapping("/logout")
    public void logout(@RequestBody Map<String, String> b) throws Exception {
        FirebaseAuth.getInstance().revokeRefreshTokens(b.get("uid"));
    }
}
