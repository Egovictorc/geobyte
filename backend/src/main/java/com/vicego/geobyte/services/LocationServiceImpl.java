package com.vicego.geobyte.services;

import com.vicego.geobyte.dto.LocationDto;
import com.vicego.geobyte.exceptions.LocationNotFoundException;
import com.vicego.geobyte.exceptions.LocationAlreadyExistException;
import com.vicego.geobyte.models.Location;
import com.vicego.geobyte.models.Location;
import com.vicego.geobyte.repository.LocationRepository;
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
public class LocationServiceImpl implements LocationService{
    @Autowired
    LocationRepository locationRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(LocationServiceImpl.class);

    @Override
    public LocationDto save(Location location) {

        LOGGER.info("Saving location object to database: {}", location);
        return locationRepository.save(location).mapToDto();
    }

    @Override
    public List<LocationDto> getAllLocations() {
        return locationRepository.findAll().stream().map(Location::mapToDto).toList();
    }

    @Override
    public LocationDto findLocationById(UUID id) {
        Optional<Location> optionalLocation = locationRepository.findById(id);
        if(optionalLocation.isPresent()) {
            return optionalLocation.get().mapToDto();
        }
        throw new LocationNotFoundException("Location does not exist");
    }

    @Override
    public String deleteLocationById(UUID id) {
        // check if location exist with the given id
        LocationDto existingLocation = findLocationById(id);
        locationRepository.deleteById(id);
        return "LocationDto deleted successfully";
    }

    @Override
    public LocationDto updateLocationById(Location Location, UUID id) {
        // check if location exist with the given id
        Optional<Location> optionalLocation = locationRepository.findById(id);
        if(optionalLocation.isPresent()) {
            Location existingLocation = optionalLocation.get();
            BeanUtils.copyProperties(optionalLocation, existingLocation);
            return locationRepository.save(existingLocation).mapToDto();
        }
        throw new LocationNotFoundException("LocationDto does not exist");
    }

}
