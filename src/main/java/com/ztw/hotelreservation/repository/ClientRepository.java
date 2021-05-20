package com.ztw.hotelreservation.repository;

import com.ztw.hotelreservation.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
