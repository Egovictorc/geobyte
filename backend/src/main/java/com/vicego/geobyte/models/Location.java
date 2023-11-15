package com.vicego.geobyte.models;


import com.vicego.geobyte.dto.LocationDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.beans.BeanUtils;

import java.util.UUID;

@Entity(name = "Delivery-locations")
@Table
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull(message= "Country cannot be empty")
    @NotBlank
    private String country;

    @NotNull(message= "State cannot be empty")
    @NotBlank
    private String state;

    @NotNull(message= "LGA cannot be empty")
    @NotBlank
    private String lga;

    @NotNull(message= "LGA cannot be empty")
    @NotBlank
    private double cost;

    public LocationDto mapToDto() {
        LocationDto locationDto = new LocationDto();
        BeanUtils.copyProperties(this, locationDto);
        return locationDto;
    }


}
