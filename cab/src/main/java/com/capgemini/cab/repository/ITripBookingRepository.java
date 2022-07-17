package com.capgemini.cab.repository;

import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.cab.domain.TripBooking;

//public interface ITripBookingRepository {
//	public TripBooking insertTripBooking(TripBooking tripBooking);
//	public TripBooking updateTripBooking(TripBooking tripBooking);
//	public TripBooking deleteTripBooking(TripBooking tripBooking);
//	public List<TripBooking> viewAllTripsCustomer(int customerId);
//	public TripBooking calculateBill(int customerId);
//}

@Repository
public interface ITripBookingRepository extends CrudRepository<TripBooking,Long> {

	//TODO : No need to add CRUD operations over here , if any customization is required we can customize the CRUD methods.
//	public TripBooking savetTripBooking(TripBooking tripBooking);
}
