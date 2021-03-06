package com.ztw.hotelreservation.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
@Entity
@Table(name="receptionists")
@Inheritance(strategy=InheritanceType.JOINED)
@PrimaryKeyJoinColumn(name="userID", referencedColumnName="id")
public class Receptionist extends User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int workerID;

    private boolean workerStatus;

    @OneToMany(mappedBy="workerIn", cascade = CascadeType.ALL)
    private List<Reservation> reservationIn = new ArrayList<>();

    @OneToMany(mappedBy="workerOut", cascade = CascadeType.ALL)
    private List<Reservation> reservationOut = new ArrayList<>();

    public Receptionist(Long id, String email, String password, String role, boolean active, String name,
                        String surname, String phone, int workerID,
                        boolean workerStatus, List<Reservation> reservationIn, List<Reservation> reservationOut) {
        super(id, email, password, role, active, name, surname, phone);
        this.workerID = workerID;
        this.workerStatus = workerStatus;
        this.reservationIn = reservationIn;
        this.reservationOut = reservationOut;
    }

    public Receptionist() {
    }

    public boolean isWorkerStatus() {
        return workerStatus;
    }

    public void setWorkerStatus(boolean workerStatus) {
        this.workerStatus = workerStatus;
    }

    public int getWorkerID() {
        return workerID;
    }

    public List<Reservation> getReservationIn() {
        return reservationIn;
    }

    public List<Reservation> getReservationOut() {
        return reservationOut;
    }
}
