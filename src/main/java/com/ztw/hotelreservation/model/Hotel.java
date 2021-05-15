package com.ztw.hotelreservation.model;

import java.io.Serializable;
import javax.persistence.*;
@Entity
@org.hibernate.annotations.Proxy(lazy=false)
@Table(name="Hotel")
public class Hotel implements Serializable {
    public Hotel() {
    }

    @Column(name="ID", nullable=false, length=10)
    @Id
    @GeneratedValue(generator="HOTEL_ID_GENERATOR")
    @org.hibernate.annotations.GenericGenerator(name="HOTEL_ID_GENERATOR", strategy="native")
    private int ID;

    @Column(name="Adress", nullable=true, length=255)
    private String adress;

    @OneToMany(mappedBy="hotel", targetEntity=Room.class)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE, org.hibernate.annotations.CascadeType.LOCK})
    @org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)
    private java.util.Set rooms = new java.util.HashSet();

    private void setID(int value) {
        this.ID = value;
    }

    public int getID() {
        return ID;
    }

    public int getORMID() {
        return getID();
    }

    public void setAdress(String value) {
        this.adress = value;
    }

    public String getAdress() {
        return adress;
    }

    public void setRooms(java.util.Set value) {
        this.rooms = value;
    }

    public java.util.Set getRooms() {
        return rooms;
    }


    public String toString() {
        return String.valueOf(getID());
    }

}