package com.vicego.geobyte.controllers;

import com.vicego.geobyte.dto.StaffDto;
import com.vicego.geobyte.models.Staff;
import com.vicego.geobyte.services.StaffService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/staff")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @GetMapping()
    public ResponseEntity<List<StaffDto>> getAllStaff() {
        List<StaffDto> allStaff = staffService.getAllStaff();
        return ResponseEntity.ok(allStaff);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StaffDto> findStaffById(@PathVariable UUID id) {
        StaffDto staff = staffService.findStaffById(id);
        return ResponseEntity.ok(staff);
    }
    @PostMapping()
    public ResponseEntity<StaffDto> addStaff(@Valid @RequestBody Staff staff) {
        StaffDto s = staffService.save(staff);
        return ResponseEntity.ok(s);
    }

}
