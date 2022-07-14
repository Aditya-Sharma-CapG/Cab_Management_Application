package com.capgemini.cab.repository;

import java.time.LocalDateTime;
import java.util.List;

import com.capgemini.cab.domain.Admin;
import com.capgemini.cab.domain.TripBooking;
import com.capgemini.cab.exception.AdminNotFoundException;
import com.capgemini.cab.exception.CustomerNotFoundException;

public interface IAdminRepository {
	public Admin insertAdmin(Admin admin);
	public Admin updateAdmin(Admin admin) throws AdminNotFoundException;
	public Admin deleteAdmin(int adminId) throws AdminNotFoundException;
	public List<TripBooking>getAllTrips(int customerId) throws CustomerNotFoundException;
	public List<TripBooking>getTripsCabwise();
	public List<TripBooking>getTripsCustomerwise();
	public List<TripBooking>getTripsDatewise();
	public List<TripBooking>getAllTripsForDays(int customerId, LocalDateTime fromDate, LocalDateTime toDate) throws CustomerNotFoundException;
}