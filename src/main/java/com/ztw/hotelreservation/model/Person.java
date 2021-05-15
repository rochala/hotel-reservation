package com.ztw.hotelreservation.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
enum Gender {
    @JsonProperty("Male")
    M,
    @JsonProperty("Female")
    K
}


@Entity
@Table(name="persons")
@Inheritance(strategy=InheritanceType.JOINED)
public class Person{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String surname;

    private Gender gender;

    private String email;

    private String phone;

    private String address;

    public Person(Long id, String name, String surname, Gender gender, String email, String phone, String address) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public Person() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}