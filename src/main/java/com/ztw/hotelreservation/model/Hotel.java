package com.ztw.hotelreservation.model;


import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
@Entity
@Table(name="hotels")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String address;

    @OneToMany(mappedBy="hotel")
    private List<Room> rooms = new ArrayList<>();

    public Hotel(Long id, String address, List<Room> rooms) {
        this.id = id;
        this.address = address;
        this.rooms = rooms;
    }

    public Hotel() {
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }

    public Long getId() {
        return id;
    }
}