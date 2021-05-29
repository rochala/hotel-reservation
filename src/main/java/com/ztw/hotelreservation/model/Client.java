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

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Reservation> reservations = new ArrayList<>();

    public Client(Long id, String username, String password, String role, boolean active, String name,
                  String surname, String phone, String address, Date creationDate,
                  ClientCard clientCard, List<Reservation> reservations) {
        super(id, username, password, role, active, name, surname, phone, address);
        this.creationDate = creationDate;
        this.clientCard = clientCard;
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
}
