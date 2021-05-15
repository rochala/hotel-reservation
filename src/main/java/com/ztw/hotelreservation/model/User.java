package com.ztw.hotelreservation.model;

import java.io.Serializable;
import javax.persistence.*;
@Entity
@org.hibernate.annotations.Proxy(lazy=false)
@Table(name="`User`")
@Inheritance(strategy=InheritanceType.JOINED)
@PrimaryKeyJoinColumn(name="PersonID", referencedColumnName="ID")
public class User extends Person implements Serializable {
    public User() {
    }

    @Column(name="CreationDate", nullable=true)
    @Temporal(TemporalType.DATE)
    private java.util.Date creationDate;

    @Column(name="ClientCard", nullable=true, length=255)
    private String clientCard;

    @OneToMany(mappedBy="user", targetEntity=Reservation.class)
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE, org.hibernate.annotations.CascadeType.LOCK})
    @org.hibernate.annotations.LazyCollection(org.hibernate.annotations.LazyCollectionOption.TRUE)
    private java.util.Set reservations = new java.util.HashSet();

    public void setCreationDate(java.util.Date value) {
        this.creationDate = value;
    }

    public java.util.Date getCreationDate() {
        return creationDate;
    }

    public void setClientCard(String value) {
        this.clientCard = value;
    }

    public String getClientCard() {
        return clientCard;
    }

    public void setReservations(java.util.Set value) {
        this.reservations = value;
    }

    public java.util.Set getReservations() {
        return reservations;
    }


    public String toString() {
        return super.toString();
    }

}
