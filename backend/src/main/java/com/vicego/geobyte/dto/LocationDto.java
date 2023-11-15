package com.vicego.geobyte.dto;

import lombok.*;

import java.util.UUID;

@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LocationDto {
    private UUID id;
    private String country;
    private String state;
    private String lga;
}
