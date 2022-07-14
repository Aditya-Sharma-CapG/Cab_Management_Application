package com.capgemini.cab.service;

import java.time.LocalDateTime;
import java.util.List;

import com.capgemini.cab.domain.Admin;
import com.capgemini.cab.domain.TripBooking;

public interface IAdminService {
	public Admin insertAdmin(Admin admin);
	public Admin updateAdmin(Admin admin);
	public Admin deleteAdmin(int adminId);
	public List<TripBooking>getAllTrips(int customerId);
	public List<TripBooking>getTripsCabwise();
	public List<TripBooking>getTripsCustomerwise();
	public List<TripBooking>getTripsDatewise();
	public List<TripBooking>getAllTripsForDays(int customerId, LocalDateTime fromDate, LocalDateTime toDate);
}