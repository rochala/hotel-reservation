package com.ztw.hotelreservation.repository;

import com.ztw.hotelreservation.model.Receptionist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceptionistRepository extends JpaRepository<Receptionist, Long> {
}
