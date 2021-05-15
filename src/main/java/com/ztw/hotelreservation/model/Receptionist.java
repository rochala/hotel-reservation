package com.ztw.hotelreservation.model;

import java.io.Serializable;
import javax.persistence.*;
@Entity
@org.hibernate.annotations.Proxy(lazy=false)
@Table(name="Receptionist")
@Inheritance(strategy=InheritanceType.JOINED)
@PrimaryKeyJoinColumn(name="PersonID", referencedColumnName="ID")
public class Receptionist extends Person implements Serializable {
    public Receptionist() {
    }

    @Column(name="WorkerID", nullable=true, length=10)
    private int workerID;

    @Column(name="WorkerStatus", nullable=false)
    private boolean workerStatus;

    @OneToMany(mappedBy="workerIn", targetEntity=Reservation.class)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE, org.hibernate.annotations.CascadeType.LOCK})
    @org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)
    private java.util.Set reservationIn = new java.util.HashSet();

    @OneToMany(mappedBy="workerOut", targetEntity=Reservation.class)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE, org.hibernate.annotations.CascadeType.LOCK})
    @org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)
    private java.util.Set reservationOut = new java.util.HashSet();

    public void setWorkerID(int value) {
        this.workerID = value;
    }

    public int getWorkerID() {
        return workerID;
    }

    public void setWorkerStatus(boolean value) {
        this.workerStatus = value;
    }

    public boolean getWorkerStatus() {
        return workerStatus;
    }

    public void setReservationIn(java.util.Set value) {
        this.reservationIn = value;
    }

    public java.util.Set getReservationIn() {
        return reservationIn;
    }


    public void setReservationOut(java.util.Set value) {
        this.reservationOut = value;
    }

    public java.util.Set getReservationOut() {
        return reservationOut;
    }


    public String toString() {
        return super.toString();
    }

}
