package com.capgemini.cab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capgemini.cab.domain.Cab;

public interface ICabRepository extends JpaRepository<Cab, Integer> {
	
	@Query("select c from Cab c where c.carType=?1")
	Cab getCabByType(String cabType);
	
	@Query("select count(carType) from Cab c where c.carType=?1")
	int getCountByCabType(String cabType);
}