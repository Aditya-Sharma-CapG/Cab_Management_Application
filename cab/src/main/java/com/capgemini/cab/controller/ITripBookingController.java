package com.capgemini.cab.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.TripBooking;
import com.capgemini.cab.service.ITripBookingService;

@RestController
@RequestMapping("/api/booking")
public class ITripBookingController {
 
	private ITripBookingService itripBookingService;

	public ITripBookingController(ITripBookingService itripBookingService) {
		super();
		this.itripBookingService = itripBookingService;
	}
	@PostMapping 
	public ResponseEntity<TripBooking> insertTripBooking(@RequestBody TripBooking tripbooking )
	{
		 return new ResponseEntity<TripBooking>(itripBookingService.saveTripBooking(tripbooking), HttpStatus.CREATED);
	}
	
	@GetMapping
	public  List<TripBooking> viewAllTripsCustomer(){
		return itripBookingService.viewAllTripsCustomer();
	}
	
	@GetMapping("{id}")
	public ResponseEntity<TripBooking> getTripBookingById(@PathVariable("id") long tripBookingId)
	{
		return new ResponseEntity<TripBooking>(itripBookingService.getTripBookingById(tripBookingId),HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteTripBooking(@PathVariable("id") long tripBookingId) {
		itripBookingService.deleteTripBooking(tripBookingId);
		return new ResponseEntity<String>("Booking deleted successfully!", HttpStatus.OK);
	}
   
	@PutMapping("{id}")
	public ResponseEntity<TripBooking> updateTripBooking(@PathVariable("id")long id,@RequestBody TripBooking tripbooking) throws Exception{
		return new ResponseEntity<TripBooking>(itripBookingService.updateTripBooking(tripbooking, id),HttpStatus.OK);
	}
}
