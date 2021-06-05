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

    public Room() {
    }

    public Room(Long id, Hotel hotel, int number, int floor, int bedsNumber,
                boolean kitchen, BigInteger basePrice, List<Reservation> reservations) {
        this.id = id;
        this.hotel = hotel;
        this.number = number;
        this.floor = floor;
        this.bedsNumber = bedsNumber;
        this.kitchen = kitchen;
        this.basePrice = basePrice;
        this.reservations = reservations;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public int getBedsNumber() {
        return bedsNumber;
    }

    public void setBedsNumber(int bedsNumber) {
        this.bedsNumber = bedsNumber;
    }

    public boolean isKitchen() {
        return kitchen;
    }

    public void setKitchen(boolean kitchen) {
        this.kitchen = kitchen;
    }

    public BigInteger getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(BigInteger basePrice) {
        this.basePrice = basePrice;
    }

    public Long getId() {
        return id;
    }
}
