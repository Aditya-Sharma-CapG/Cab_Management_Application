package com.capgemini.cab.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Cab {
	
	/*
	 * Id is unique for each cab and non-null, it is useful to find a cab
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cabId;
	
	/*
	 * this field specifies which type of car it is, like sedan or suv, etc
	 */
	@Column(name = "car_type", nullable = false)
	@NotBlank(message = "car type required")
	private String carType;
	
	/*
	 * this field specifies name of car, like Swift, Blaeno or XUV700, etc
	 */
	@Column(name = "car_name")
	private String carName;
	
	/*
	 * this field specifies the rate of a specific car type per km
	 */
	@Column(name = "per_km_rate"
			, nullable = false)
	private float perKmRate;
	
	public Cab() {
		
	}
	
	// Getters and Setters
	public int getCabId() {
		return cabId;
	}
	public void setCabId(int cabId) {
		this.cabId = cabId;
	}
	
	public String getCarType() {
		return carType;
	}
	public void setCarType(String carType) {
		this.carType = carType;
	}
	
	public String getCarName() {
		return carName;
	}

	public void setCarName(String carName) {
		this.carName = carName;
	}

	public float getPerKmRate() {
		return perKmRate;
	}
	public void setPerKmRate(float perKmRate) {
		this.perKmRate = perKmRate;
	}
	
}