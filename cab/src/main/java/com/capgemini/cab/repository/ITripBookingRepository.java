package com.capgemini.cab.repository;

import java.util.List;

import com.capgemini.cab.domain.TripBooking;

public interface ITripBookingRepository {
	public TripBooking insertTripBooking(TripBooking tripBooking);
	public TripBooking updateTripBooking(TripBooking tripBooking);
	public TripBooking deleteTripBooking(TripBooking tripBooking);
	public List<TripBooking> viewAllTripsCustomer(int customerId);
	public TripBooking calculateBill(int customerId);
}