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
    private List<Room> rooms = new ArrayList<Room>();


}