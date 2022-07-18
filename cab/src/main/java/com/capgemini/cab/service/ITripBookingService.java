package com.capgemini.cab.service;

import java.util.List;

import com.capgemini.cab.domain.TripBooking;

public interface ITripBookingService {
	
	TripBooking saveTripBooking(TripBooking tripBooking);
	
    List<TripBooking> viewAllTripsCustomer();
    public  TripBooking updateTripBooking(TripBooking tripBooking,long id) throws Exception;
    
	TripBooking getTripBookingById(long tripBookingId);
	
	void deleteTripBooking(long tripBookingId);

}

