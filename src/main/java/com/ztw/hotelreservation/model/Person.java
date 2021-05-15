package com.ztw.hotelreservation.model

import java.io.Serializable;
import javax.persistence.*;
@Entity
@org.hibernate.annotations.Proxy(lazy=false)
@Table(name="Person")
@Inheritance(strategy=InheritanceType.JOINED)
public class Person implements Serializable {
    public Person() {
    }

    @Column(name="ID", nullable=false, length=10)
    @Id
    @GeneratedValue(generator="PERSON_ID_GENERATOR")
    @org.hibernate.annotations.GenericGenerator(name="PERSON_ID_GENERATOR", strategy="native")
    private int ID;

    @Column(name="Name", nullable=true, length=255)
    private String name;

    @Column(name="Surname", nullable=true, length=255)
    private String surname;

    @Column(name="Email", nullable=true, length=255)
    private String email;

    @Column(name="Phone", nullable=true, length=255)
    private String phone;

    private void setID(int value) {
        this.ID = value;
    }

    public int getID() {
        return ID;
    }

    public int getORMID() {
        return getID();
    }

    public void setName(String value) {
        this.name = value;
    }

    public String getName() {
        return name;
    }

    public void setSurname(String value) {
        this.surname = value;
    }

    public String getSurname() {
        return surname;
    }

    public void setEmail(String value) {
        this.email = value;
    }

    public String getEmail() {
        return email;
    }

    public void setPhone(String value) {
        this.phone = value;
    }

    public String getPhone() {
        return phone;
    }

    public String toString() {
        return String.valueOf(getID());
    }

}