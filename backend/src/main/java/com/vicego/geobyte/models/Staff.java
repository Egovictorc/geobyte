package com.vicego.geobyte.models;

import com.vicego.geobyte.dto.StaffDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.beans.BeanUtils;

import java.util.UUID;

@Entity
@Table
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Staff {
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
    private String password;

    @Min(value = 7, message = "Level must be greater than 6")
    private int level;

    private double salary;
    public StaffDto mapToDto() {
        StaffDto staffDto = new StaffDto();
        BeanUtils.copyProperties(this, staffDto);
        return staffDto;
    }
}
