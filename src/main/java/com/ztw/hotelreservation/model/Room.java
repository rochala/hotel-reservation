package com.ztw.hotelreservation.model;

import java.io.Serializable;
import javax.persistence.*;
@Entity
@org.hibernate.annotations.Proxy(lazy=false)
@Table(name="Room")
public class Room implements Serializable {
    public Room() {
    }

    @Column(name="ID", nullable=false, length=10)
    @Id
    @GeneratedValue(generator="ROOM_ID_GENERATOR")
    @org.hibernate.annotations.GenericGenerator(name="ROOM_ID_GENERATOR", strategy="native")
    private int ID;

    @ManyToOne(targetEntity=Hotel.class, fetch=FetchType.LAZY)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.LOCK})
    @JoinColumns(value={ @JoinColumn(name="HotelID", referencedColumnName="ID", nullable=false) }, foreignKey=@ForeignKey(name="FKRoom663513"))
    private Hotel hotel;

    @Column(name="Number", nullable=true, length=10)
    private int number;

    @Column(name="Floor", nullable=true, length=10)
    private int floor;

    @Column(name="BedsNumber", nullable=false, length=10)
    private int bedsNumber;

    @Column(name="Kitchen", nullable=true)
    private boolean kitchen;

    @Column(name="BasePrice", nullable=true, length=10)
    private Int basePrice;

    @OneToMany(mappedBy="room", targetEntity=Reservation.class)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE, org.hibernate.annotations.CascadeType.LOCK})
    @org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)
    private java.util.Set resevation = new java.util.HashSet();

    private void setID(int value) {
        this.ID = value;
    }

    public int getID() {
        return ID;
    }

    public int getORMID() {
        return getID();
    }

    public void setNumber(int value) {
        this.number = value;
    }

    public int getNumber() {
        return number;
    }

    public void setFloor(int value) {
        this.floor = value;
    }

    public int getFloor() {
        return floor;
    }

    public void setBedsNumber(int value) {
        this.bedsNumber = value;
    }

    public int getBedsNumber() {
        return bedsNumber;
    }

    public void setKitchen(boolean value) {
        this.kitchen = value;
    }

    public boolean getKitchen() {
        return kitchen;
    }

    public void setBasePrice(Int value) {
        this.basePrice = value;
    }

    public Int getBasePrice() {
        return basePrice;
    }

    public void setResevation(java.util.Set value) {
        this.resevation = value;
    }

    public java.util.Set getResevation() {
        return resevation;
    }


    public void setHotel(Hotel value) {
        this.hotel = value;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public String toString() {
        return String.valueOf(getID());
    }

}
