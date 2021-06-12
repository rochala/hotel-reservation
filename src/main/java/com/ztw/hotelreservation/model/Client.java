package com.ztw.hotelreservation.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.*;

enum ClientCard {
    @JsonProperty("Bronze Membership")
    Bronze,
    @JsonProperty("Silver Membership")
    Silver,
    @JsonProperty("Gold Membership")
    Gold,
    @JsonProperty("Platinum Membership")
    Platinum
}

@Entity
@Table(name = "clients")
@Inheritance(strategy = InheritanceType.JOINED)
@PrimaryKeyJoinColumn(name = "userID", referencedColumnName = "id")
public class Client extends User {

    @DateTimeFormat
    private Date creationDate;

    private ClientCard clientCard;

    private String address1;
    private String address2;
    private String zipCode;
    private String city;
    private String country;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Reservation> reservations = new ArrayList<>();

    public Client(Long id, String username, String password, String role, boolean active, String name,
                  String surname, String phone, Date creationDate,
                  ClientCard clientCard, String address1, String address2, String zipCode, String city, String country, List<Reservation> reservations) {
        super(id, username, password, role, active, name, surname, phone);
        this.creationDate = creationDate;
        this.clientCard = clientCard;
        this.address1 = address1;
        this.address2 = address2;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
        this.reservations = reservations;
    }

    public Client() {
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public ClientCard getClientCard() {
        return clientCard;
    }

    public void setClientCard(ClientCard clientCard) {
        this.clientCard = clientCard;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
