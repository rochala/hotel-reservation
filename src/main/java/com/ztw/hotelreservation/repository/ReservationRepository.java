package com.ztw.hotelreservation.repository;

import com.ztw.hotelreservation.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
