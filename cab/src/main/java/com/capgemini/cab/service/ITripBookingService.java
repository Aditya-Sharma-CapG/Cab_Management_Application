package com.capgemini.cab.service;

import java.util.List;

import com.capgemini.cab.domain.TripBooking;

public interface ITripBookingService {
	TripBooking saveTripBooking(TripBooking tripBooking);
    List<TripBooking> viewAllTripsCustomer();
//    TripBooking getTripBookingById(long id);
    public  TripBooking updateTripBooking(TripBooking tripBooking,long id) throws Exception;
//	public TripBooking updateTripBooking(TripBooking tripBooking);
//	public TripBooking deleteTripBooking(TripBooking tripBooking);
//   List<TripBooking> viewAllTripsCustomer(int customerId);
//	public TripBooking calculateBill(int customerId);
	TripBooking getTripBookingById(long tripBookingId);
//	void deleteTripBooking(long tripBookingId );
//	TripBooking updateTripBooking
	void deleteTripBooking(long tripBookingId);

}

