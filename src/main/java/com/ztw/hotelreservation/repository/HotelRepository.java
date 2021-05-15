package com.ztw.hotelreservation.repository;

import com.ztw.hotelreservation.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}
