package com.ztw.hotelreservation.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
@Entity
@Table(name="receptionists")
@Inheritance(strategy=InheritanceType.JOINED)
@PrimaryKeyJoinColumn(name="personID", referencedColumnName="id")
public class Receptionist extends Person {
    public Receptionist() {
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int workerID;

    private boolean workerStatus;

    @OneToMany(mappedBy="workerIn", cascade = CascadeType.ALL)
    private List<Reservation> reservationIn = new ArrayList<>();

    @OneToMany(mappedBy="workerOut", cascade = CascadeType.ALL)
    private List<Reservation> reservationOut = new ArrayList<>();

}
