package com.vicego.geobyte.controllers;

import com.vicego.geobyte.dto.UserDto;
import com.vicego.geobyte.models.User;
import com.vicego.geobyte.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public ResponseEntity<?> getAllUserOrUserByEmail(@RequestParam(required = false, name="email") String email ) {
        if(email != null ) {
            UserDto userDto = userService.findUserByEmail(email);
            return ResponseEntity.status(HttpStatus.OK).body(userDto);
        }
        List<UserDto> allUser = userService.getAllUser();
        return ResponseEntity.status(HttpStatus.OK).body(allUser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> findUserById(@PathVariable UUID id) {
        UserDto user = userService.findUserById(id);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PostMapping()
    public ResponseEntity<UserDto> addUser(@Valid @RequestBody User user) {
        UserDto s = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(s);
    }

}
