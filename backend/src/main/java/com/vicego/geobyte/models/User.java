package com.vicego.geobyte.models;

import com.vicego.geobyte.dto.UserDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.BeanUtils;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.util.UUID;

@Entity(name = "users")
@Table
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull(message = "First Name must not be null")
    @NotBlank
    private String firstName;

    @NotNull(message = "Last Name must not be Null")
    @NotBlank
    private String lastName;

    @Email(message = "Must be a valid email Address")
    private String email;

    @NotNull(message = "Password must not be Null")
    @NotBlank
    private String password;

    @NotNull(message = "Role must not be Null")
    private String role;

    @CreationTimestamp
    private LocalDate date_created;

    public UserDto mapToDto() {
        UserDto staffDto = new UserDto();
        BeanUtils.copyProperties(this, staffDto);
        return staffDto;
    }
}
