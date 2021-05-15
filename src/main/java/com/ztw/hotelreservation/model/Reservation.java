package com.ztw.hotelreservation.model;


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

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="room_id")
    private Room room;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "workerOut_id")
    private Receptionist workerOut;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="workerIn_id")
    private Receptionist workerIn;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private Date reservationTime;

    private Date reservationStart;

    private BigInteger price;

    private Status status;

    private Date reservationEnd;

}
