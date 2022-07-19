package com.capgemini.cab.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.capgemini.cab.domain.TripBooking;
import com.capgemini.cab.exception.TripBookingNotFoundException;
import com.capgemini.cab.repository.ITripBookingRepository;
import com.capgemini.cab.service.ITripBookingService;


@Service
public class ITripBookingServiceImpl implements ITripBookingService {
	private ITripBookingRepository itripBookingRepository;
	
    
	public ITripBookingServiceImpl(ITripBookingRepository itripBookingRepository) {
		super();
		this.itripBookingRepository = itripBookingRepository;
	}


	@Override
	public TripBooking saveTripBooking(TripBooking tripBooking) {
		return itripBookingRepository.save(tripBooking);
	}


	@Override
	public List<TripBooking> viewAllTripsCustomer() {
		return (List<TripBooking>) itripBookingRepository.findAll();
	}


	@Override
	public TripBooking getTripBookingById(long id) {
			Optional<TripBooking> tripBooking = itripBookingRepository.findById(id);
		if (tripBooking.isPresent())
		
			return tripBooking.get();
		return null;
		}


	@Override
	public void deleteTripBooking(long tripBookingId) {
		itripBookingRepository.findById(tripBookingId);
		itripBookingRepository.deleteById(tripBookingId);
	}


	@Override
	public TripBooking updateTripBooking(TripBooking tripBooking, long id) throws Exception {

		TripBooking existingBooking=itripBookingRepository.findById(id).orElseThrow(()->new TripBookingNotFoundException("TripBooking","Id",id)); 
		existingBooking.setCustomerId(tripBooking.getCustomerId());
     	existingBooking.setFromLocation(tripBooking.getFromLocation());
     	existingBooking.setToLocation(tripBooking.getToLocation());
    	existingBooking.setStatus(tripBooking.getStatus());
    	existingBooking.setDistanceInKm(tripBooking.getDistanceInKm());
     	existingBooking.setBill(tripBooking.getBill());
     	itripBookingRepository.save(existingBooking);
		return existingBooking;
	}

}
