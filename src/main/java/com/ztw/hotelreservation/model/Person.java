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



}