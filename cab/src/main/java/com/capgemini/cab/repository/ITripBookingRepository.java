package com.capgemini.cab.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.cab.domain.TripBooking;

@Repository
public interface ITripBookingRepository extends CrudRepository<TripBooking,Long> {

}
