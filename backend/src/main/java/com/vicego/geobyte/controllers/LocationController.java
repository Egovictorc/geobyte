package com.vicego.geobyte.controllers;

import com.vicego.geobyte.dto.LocationDto;
import com.vicego.geobyte.models.Location;
import com.vicego.geobyte.services.LocationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/locations")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping()
    public ResponseEntity<List<LocationDto>> getAllLocations(@RequestParam(required = false, name="email") String email ) {
        List<LocationDto> allLocation = locationService.getAllLocations();
        return ResponseEntity.status(HttpStatus.OK).body(allLocation);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LocationDto> findLocationById(@PathVariable UUID id) {
        LocationDto location = locationService.findLocationById(id);
        return ResponseEntity.status(HttpStatus.OK).body(location);
    }

    @PostMapping()
    public ResponseEntity<LocationDto> addLocation(@Valid @RequestBody Location location) {
        LocationDto s = locationService.save(location);
        return ResponseEntity.status(HttpStatus.CREATED).body(s);
    }

}
