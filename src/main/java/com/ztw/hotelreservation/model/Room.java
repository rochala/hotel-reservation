package com.ztw.hotelreservation.model;

import org.hibernate.boot.jaxb.hbm.internal.CacheAccessTypeConverter;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
@Entity
@Table(name="rooms")
public class Room implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="hotel_id", nullable = false)
    private Hotel hotel;

    private int number;

    private int floor;

    private int bedsNumber;

    private boolean kitchen;

    private BigInteger basePrice;

    @OneToMany(mappedBy="room", cascade = CascadeType.ALL)
    private List<Reservation> reservations;



}
