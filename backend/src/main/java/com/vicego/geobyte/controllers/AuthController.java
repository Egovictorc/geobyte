package com.vicego.geobyte.controllers;

import com.vicego.geobyte.dto.AuthenticationRequest;
import com.vicego.geobyte.dto.UserDto;
import com.vicego.geobyte.services.UserService;
import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    UserService userService;
    @PostMapping
    public ResponseEntity<UserDto> authenticate(@Validated @RequestBody AuthenticationRequest request) throws AuthException {
        UserDto user = userService.authenticate(request.getEmail(), request.getPassword());
        return ResponseEntity.status(HttpStatus.OK).body(user);

    }
}
