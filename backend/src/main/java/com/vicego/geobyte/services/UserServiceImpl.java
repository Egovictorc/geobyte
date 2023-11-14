package com.vicego.geobyte.services;

import com.vicego.geobyte.dto.UserDto;
import com.vicego.geobyte.exceptions.UserAlreadyExistException;
import com.vicego.geobyte.exceptions.UserNotFoundException;
import com.vicego.geobyte.models.User;
import com.vicego.geobyte.repository.UserRepository;
import jakarta.security.auth.message.AuthException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    @Override
    public UserDto save(User user) {
        // check if user already exists
        Optional<User> optionalUser = userRepository.findByEmailIgnoreCase(user.getEmail());
        if(optionalUser.isPresent()) {
            throw new UserAlreadyExistException("User with the given email already exist");
        }
        LOGGER.info("Saving user object to database: {}", user);
        return userRepository.save(user).mapToDto();
    }

    @Override
    public List<UserDto> getAllUser() {

        return userRepository.findAll().stream().map(User::mapToDto).toList();
    }

    @Override
    public UserDto findUserById (UUID id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()) {
            return optionalUser.get().mapToDto();
        }
        throw new UserNotFoundException("User does not exist");
    }
    @Override
    public UserDto findUserByEmail (String email) {
        Optional<User> optionalUser = userRepository.findByEmailIgnoreCase(email);
        if(optionalUser.isPresent()) {
            return optionalUser.get().mapToDto();
        }
        throw new UserNotFoundException("User does not exist");
    }

    @Override
    public String deletetUserById(UUID id) {
        // check if user exist with the given id
        UserDto existingUser = findUserById(id);
        userRepository.deleteById(id);
        return "UserDto deleted successfully";
    }

    @Override
    public UserDto updatetUserById(User user, UUID id) {
        // check if user exist with the given id
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            BeanUtils.copyProperties(user, existingUser);
            return userRepository.save(existingUser).mapToDto();
        }
        throw new UserNotFoundException("UserDto does not exist");
    }

    @Override
    public UserDto authenticate(String email, String password) throws AuthException {
        Optional<User> optionalUser = userRepository.findByEmailIgnoreCase(email);
        if(optionalUser.isPresent()) {
            User existingUser = optionalUser.get();

            // check if password match
            if(existingUser.getPassword().equals(password)) {
                return optionalUser.get().mapToDto();
            }
            throw new AuthException("Incorrect Username / Password");
        }
        throw new UserNotFoundException("User does not exist");
    }
}
