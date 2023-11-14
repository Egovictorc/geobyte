package com.vicego.geobyte.services;

import com.vicego.geobyte.dto.UserDto;
import com.vicego.geobyte.models.User;
import jakarta.security.auth.message.AuthException;

import java.util.List;
import java.util.UUID;

public interface UserService {
    UserDto save(User User);

    List<UserDto> getAllUser();

    UserDto findUserById(UUID id);
    UserDto findUserByEmail(String email);

    String deletetUserById(UUID id);
    UserDto updatetUserById(User User, UUID id);

    UserDto authenticate(String email, String password) throws AuthException;
}
