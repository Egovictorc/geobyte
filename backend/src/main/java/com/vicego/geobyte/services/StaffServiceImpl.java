package com.vicego.geobyte.services;

import com.vicego.geobyte.dto.StaffDto;
import com.vicego.geobyte.exceptions.StaffNotFoundException;
import com.vicego.geobyte.models.Staff;
import com.vicego.geobyte.repository.StaffRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StaffServiceImpl implements StaffService{
    @Autowired
    StaffRepository staffRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(StaffServiceImpl.class);

    @Override
    public StaffDto save(Staff staff) {
        LOGGER.info("Saving staff object to database");
        return staffRepository.save(staff).mapToDto();
    }

    @Override
    public List<StaffDto> getAllStaff() {

        return staffRepository.findAll().stream().map(Staff::mapToDto).toList();
    }

    @Override
    public StaffDto findStaffById (UUID id) {
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        if(optionalStaff.isPresent()) {
            return optionalStaff.get().mapToDto();
        }
        throw new StaffNotFoundException("StaffDto does not exist");
    }

    @Override
    public String deletetStaffById(UUID id) {
        // check if staff exist with the given id
        StaffDto existingStaff = findStaffById(id);
        staffRepository.deleteById(id);
        return "StaffDto deleted successfully";
    }

    @Override
    public StaffDto updatetStaffById(Staff staff, UUID id) {
        // check if staff exist with the given id
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        if(optionalStaff.isPresent()) {
            Staff existingStaff = optionalStaff.get();
            BeanUtils.copyProperties(staff, existingStaff);
            return staffRepository.save(existingStaff).mapToDto();
        }
        throw new StaffNotFoundException("StaffDto does not exist");
    }
}
