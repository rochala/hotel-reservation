package com.ztw.hotelreservation.controller;

import com.ztw.hotelreservation.model.Reservation;
import com.ztw.hotelreservation.model.Room;
import com.ztw.hotelreservation.repository.ClientRepository;
import com.ztw.hotelreservation.repository.ReservationRepository;
import com.ztw.hotelreservation.repository.RoomRepository;
import com.ztw.hotelreservation.repository.UserRepository;
import com.ztw.hotelreservation.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RestController;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
public class RoomController {
    public final RoomRepository roomRepository;
    public final ReservationRepository reservationRepository;

    @Autowired
    public RoomController(RoomRepository roomRepository, ReservationRepository reservationRepository) {
        this.roomRepository= roomRepository;
        this.reservationRepository = reservationRepository;
    }

    @GetMapping("/rooms/{floor}")
    public ResponseEntity<Object> getAllRooms(@PathVariable Integer floor ) {
        return new ResponseEntity<>(roomRepository.findAllByFloor(floor), HttpStatus.OK);
    }

    @GetMapping("/rooms/{floor}/{start}/{end}")
    public ResponseEntity<Object> getRooms(@PathVariable Integer floor, @PathVariable String start, @PathVariable String end) {
        Date startDate;
        Date endDate;
        try {
            startDate = new SimpleDateFormat("yyyy-MM-dd").parse(start);
            endDate = new SimpleDateFormat("yyyy-MM-dd").parse(end);
        } catch (ParseException e) {
            return new ResponseEntity<>(HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        }

        List<Room> avaliableRooms = roomRepository.findAllByFloor(floor);
        List<Reservation> reservations = reservationRepository.findAllByReservationStartBetweenOrReservationEndBetween(startDate, endDate,startDate,endDate);
        Set<Room> reservedRooms = reservations.stream().map(Reservation::getRoom).collect(Collectors.toSet());
        avaliableRooms.removeAll(reservedRooms);

        return new ResponseEntity<>(avaliableRooms, HttpStatus.OK);
    }
}
