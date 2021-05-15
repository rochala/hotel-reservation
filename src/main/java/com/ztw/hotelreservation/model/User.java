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
@Table(name="users")
@Inheritance(strategy=InheritanceType.JOINED)
@PrimaryKeyJoinColumn(name="personID", referencedColumnName="id")
public class User extends Person {

    @DateTimeFormat
    private Date creationDate;

    private ClientCard clientCard;

    @OneToMany(mappedBy="user", cascade = CascadeType.ALL)
    private List<Reservation> reservations = new ArrayList<>();

    public User(Long id, String name, String surname, Gender gender,
                String email, String phone, String address, Date creationDate,
                ClientCard clientCard, List<Reservation> reservations) {
        super(id, name, surname, gender, email, phone, address);
        this.creationDate = creationDate;
        this.clientCard = clientCard;
        this.reservations = reservations;
    }

    public User() {

    }
}
