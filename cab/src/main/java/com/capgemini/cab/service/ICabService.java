package com.capgemini.cab.service;

import java.util.List;

import com.capgemini.cab.domain.Cab;

public interface ICabService {
	
	/*
	 * insertCab method is used to add new cab details in the database
	 * @param(Cab cab)
	 */
	public Cab insertCab(Cab cab);
	
	/*
	 * getAllCabs method will show all the cab details
	 * returns list of cab details
	 */
	public List<Cab> getAllCabs();
	
	/*
	 * updateCab method will update the cab details, cab is selected by prividing its Id
	 * @param(id)
	 * Admin privilidge
	 */
	public Cab updateCab(Cab cab, int id);
	
	/*
	 * deleteCab method will delete the cab details based on specified id
	 * @param(id)
	 */
	void deleteCabById(int cabId);
	
	/*
	 * getCabByType method show cab detail of the type specified
	 */
//	Cab getCabByType(String cabType);

	/*
	 * this method will return the count of the cabs of specific type
	 */
	public int countCabsOfType(String carType);
}