package com.ztw.hotelreservation.repository;

import com.ztw.hotelreservation.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    public List<Room> findAllByFloor(Integer floor);
}
