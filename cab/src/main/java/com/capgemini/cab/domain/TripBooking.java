package com.capgemini.cab.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
<<<<<<< HEAD

//public class TripBooking {
=======
>>>>>>> 80b9318b01da6dd325790aeb55c68b8e77ef2b8f

@Entity
@Table(name="booking")
public class TripBooking {
	/*
	 * Id is unique for each TripBooking and non-null.
	 */
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long tripBookingId ;
	/*
	 * It specifies the customer id.
	 */
	private int customerId;
	
	/*
	 * It specifies the starting location.
	 */
	@Column(name="FROM_LOCATION",nullable=false)
	private String fromLocation;
	
	/*
	 * It specifies the end location.
	 */

	@Column(name="TO_LOCATION",nullable=false)
	private String toLocation;
	/*
	 * It specifies the starting date for the trip.
	 */
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date fromDateTime;
	/*
	 * It specifies the end date for the trip.
	 */
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private String toDateTime;
	/*
	 * It specifies availability..
	 */
    private Boolean status;
    /*
	 * It specifies total distance covered in the trip.
	 */
	private float distanceInKm ;
	/*
	 * It specifies the bill of the trip done.
	 */
	private float bill;
	
	public TripBooking() {
		super();
	}

	public long getTripBookingId() {
		return tripBookingId;
	}

	public void setTripBookingId(long tripBookingId) {
		this.tripBookingId = tripBookingId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getFromLocation() {
		return fromLocation;
	}

	public void setFromLocation(String fromLocation) {
		this.fromLocation = fromLocation;
	}

	public String getToLocation() {
		return toLocation;
	}

	public void setToLocation(String toLocation) {
		this.toLocation = toLocation;
	}

	public Date getFromDateTime() {
		return fromDateTime;
	}

	public void setFromDateTime(Date fromDateTime) {
		this.fromDateTime = fromDateTime;
	}

	public String getToDateTime() {
		return toDateTime;
	}

	public void setToDateTime(String toDateTime) {
		this.toDateTime = toDateTime;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public float getDistanceInKm() {
		return distanceInKm;
	}

	public void setDistanceInKm(float distanceInKm) {
		this.distanceInKm = distanceInKm;
	}

	public float getBill() {
		return bill;
	}

	public void setBill(float bill) {
		this.bill = bill;
	}
	
}
