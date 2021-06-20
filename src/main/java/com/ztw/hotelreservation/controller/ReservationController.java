package com.ztw.hotelreservation.controller;

import com.ztw.hotelreservation.model.Client;
import com.ztw.hotelreservation.model.Reservation;
import com.ztw.hotelreservation.model.Room;
import com.ztw.hotelreservation.repository.ClientRepository;
import com.ztw.hotelreservation.repository.ReservationRepository;
import com.ztw.hotelreservation.repository.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ReservationController {
    private final ReservationRepository reservationRepository;
    private final ClientRepository clientRepository;
    private final RoomRepository roomRepository;

    public ReservationController(ReservationRepository reservationRepository, ClientRepository clientRepository, RoomRepository roomRepository) {
        this.reservationRepository = reservationRepository;
        this.clientRepository = clientRepository;
        this.roomRepository = roomRepository;
    }

    @GetMapping("/reservation")
    public ResponseEntity<Object> getReservationsData(@RequestAttribute Long id) {
        Optional<Client> optClient=clientRepository.findById(id);
        if (optClient.isPresent())
            return new ResponseEntity<>(reservationRepository.findReservationsByClient(optClient.get()), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/reservation")
    public ResponseEntity<?> createReservation(@RequestAttribute Long id, @RequestBody Reservation reservation) {
        Optional<Client> optClient=clientRepository.findById(id);
        Optional<Room> optRoom=roomRepository.findById(reservation.getRoom().getId());
        if (optClient.isPresent() && optRoom.isPresent()) {
            reservation.setUser(optClient.get());
            reservation.setRoom(optRoom.get());
            reservationRepository.save(reservation);
            return new ResponseEntity<>(reservation, HttpStatus.CREATED);
        }
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
