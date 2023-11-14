package com.vicego.geobyte.repository;

import com.vicego.geobyte.dto.StaffDto;
import com.vicego.geobyte.models.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface StaffRepository extends JpaRepository<Staff, UUID> {
    Optional<Staff> findByEmailIgnoreCase(String email);
}
