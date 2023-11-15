package com.vicego.geobyte.services;

import com.vicego.geobyte.dto.LocationDto;
import com.vicego.geobyte.models.Location;

import java.util.List;
import java.util.UUID;

public interface LocationService {
    LocationDto save(Location Location);

    List<LocationDto> getAllLocations();

    LocationDto findLocationById(UUID id);

    String deleteLocationById(UUID id);
    LocationDto updateLocationById(Location Location, UUID id);

}
