package com.vicego.geobyte.services;

import com.vicego.geobyte.dto.StaffDto;
import com.vicego.geobyte.models.Staff;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface StaffService {
    StaffDto save(Staff staff);
    List<StaffDto> getAllStaff();

    StaffDto findStaffById(UUID id);

    String deletetStaffById(UUID id);
    StaffDto updatetStaffById(Staff staff, UUID id);
}
