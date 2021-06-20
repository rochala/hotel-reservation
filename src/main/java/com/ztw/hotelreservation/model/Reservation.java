package com.ztw.hotelreservation.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigInteger;
import java.util.Date;
import javax.persistence.*;

enum Status {
    @JsonProperty("Reserved")
    Reserved,
    @JsonProperty("Paid")
    Paid,
    @JsonProperty("Unpaid")
    Unpaid,
    @JsonProperty("Cancelled")
    Cancelled,
    @JsonProperty("Returned")
    Returned,
}

@Entity
@Table(name="reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="room_id")
    @JsonIgnoreProperties("reservations")
    private Room room;

    @ManyToOne
    @JoinColumn(name = "worker_out_id")
    private Receptionist workerOut;

    @ManyToOne
    @JoinColumn(name="worker_in_id")
    private Receptionist workerIn;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    @JsonIgnoreProperties("reservations")
    private Client client;

    private Date reservationTime;

    private Date reservationStart;

    private BigInteger price;

    private Status status;

    private Date reservationEnd;

    public Reservation() {
    }

    public Reservation(Long id, Room room, Receptionist workerOut, Receptionist workerIn,
                       Client client, Date reservationTime, Date reservationStart,
                       BigInteger price, Status status, Date reservationEnd) {
        this.id = id;
        this.room = room;
        this.workerOut = workerOut;
        this.workerIn = workerIn;
        this.client = client;
        this.reservationTime = reservationTime;
        this.reservationStart = reservationStart;
        this.price = price;
        this.status = status;
        this.reservationEnd = reservationEnd;
    }

    public Long getId() {
        return id;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Receptionist getWorkerOut() {
        return workerOut;
    }

    public void setWorkerOut(Receptionist workerOut) {
        this.workerOut = workerOut;
    }

    public Receptionist getWorkerIn() {
        return workerIn;
    }

    public void setWorkerIn(Receptionist workerIn) {
        this.workerIn = workerIn;
    }

    public Client getUser() {
        return client;
    }

    public void setUser(Client client) {
        this.client = client;
    }

    public Date getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(Date reservationTime) {
        this.reservationTime = reservationTime;
    }

    public Date getReservationStart() {
        return reservationStart;
    }

    public void setReservationStart(Date reservationStart) {
        this.reservationStart = reservationStart;
    }

    public BigInteger getPrice() {
        return price;
    }

    public void setPrice(BigInteger price) {
        this.price = price;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Date getReservationEnd() {
        return reservationEnd;
    }

    public void setReservationEnd(Date reservationEnd) {
        this.reservationEnd = reservationEnd;
    }
}
