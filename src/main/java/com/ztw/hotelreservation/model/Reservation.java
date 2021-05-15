package com.ztw.hotelreservation.model;

import java.io.Serializable;
import javax.persistence.*;
@Entity
@org.hibernate.annotations.Proxy(lazy=false)
@Table(name="Reservation")
public class Reservation implements Serializable {
    public Reservation() {
    }

    @Column(name="ID", nullable=false, length=10)
    @Id
    @GeneratedValue(generator="RESERVATION_ID_GENERATOR")
    @org.hibernate.annotations.GenericGenerator(name="RESERVATION_ID_GENERATOR", strategy="native")
    private int ID;

    @ManyToOne(targetEntity=Room.class, fetch=FetchType.LAZY)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.LOCK})
    @JoinColumns(value={ @JoinColumn(name="RoomID", referencedColumnName="ID", nullable=false) }, foreignKey=@ForeignKey(name="FKReservatio111662"))
    private Room room;

    @ManyToOne(targetEntity=Receptionist.class, fetch=FetchType.LAZY)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.LOCK})
    @JoinColumns(value={ @JoinColumn(name="WorkerOutID", referencedColumnName="PersonID") }, foreignKey=@ForeignKey(name="FKReservatio631895"))
    private Receptionist workerOut;

    @ManyToOne(targetEntity=Receptionist.class, fetch=FetchType.LAZY)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.LOCK})
    @JoinColumns(value={ @JoinColumn(name="WorkerInID", referencedColumnName="PersonID") }, foreignKey=@ForeignKey(name="FKReservatio984983"))
    private Receptionist workerIn;

    @ManyToOne(targetEntity=User.class, fetch=FetchType.LAZY)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.LOCK})
    @JoinColumns(value={ @JoinColumn(name="UserID", referencedColumnName="PersonID", nullable=false) }, foreignKey=@ForeignKey(name="FKReservatio924483"))
    private User user;

    @Column(name="ReservationTime", nullable=true)
    @Temporal(TemporalType.DATE)
    private java.util.Date reservationTime;

    @Column(name="ReservationStart", nullable=false)
    @Temporal(TemporalType.DATE)
    private java.util.Date reservationStart;

    @Column(name="Price", nullable=true, length=10)
    private Int price;

    @Column(name="Status", nullable=true, length=255)
    private String status;

    @Column(name="ReservatinEnd", nullable=true)
    @Temporal(TemporalType.DATE)
    private java.util.Date reservatinEnd;

    private void setID(int value) {
        this.ID = value;
    }

    public int getID() {
        return ID;
    }

    public int getORMID() {
        return getID();
    }

    public void setReservationTime(java.util.Date value) {
        this.reservationTime = value;
    }

    public java.util.Date getReservationTime() {
        return reservationTime;
    }

    public void setReservationStart(java.util.Date value) {
        this.reservationStart = value;
    }

    public java.util.Date getReservationStart() {
        return reservationStart;
    }

    public void setPrice(Int value) {
        this.price = value;
    }

    public Int getPrice() {
        return price;
    }

    public void setStatus(String value) {
        this.status = value;
    }

    public String getStatus() {
        return status;
    }

    public void setReservatinEnd(java.util.Date value) {
        this.reservatinEnd = value;
    }

    public java.util.Date getReservatinEnd() {
        return reservatinEnd;
    }

    public void setUser(User value) {
        this.user = value;
    }

    public User getUser() {
        return user;
    }

    public void setWorkerIn(Receptionist value) {
        this.workerIn = value;
    }

    public Receptionist getWorkerIn() {
        return workerIn;
    }

    public void setWorkerOut(Receptionist value) {
        this.workerOut = value;
    }

    public Receptionist getWorkerOut() {
        return workerOut;
    }

    public void setRoom(Room value) {
        this.room = value;
    }

    public Room getRoom() {
        return room;
    }

    public String toString() {
        return String.valueOf(getID());
    }

}
