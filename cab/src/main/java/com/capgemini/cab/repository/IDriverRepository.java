package com.capgemini.cab.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.cab.domain.Driver;


@Repository
public interface IDriverRepository extends JpaRepository<Driver, Integer>{
	
}