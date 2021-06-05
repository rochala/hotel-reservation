package com.ztw.hotelreservation.repository;

import com.ztw.hotelreservation.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    public List<Reservation> findAllByReservationStartBetweenOrReservationEndBetween(Date start, Date end, Date start2, Date end2);
}
