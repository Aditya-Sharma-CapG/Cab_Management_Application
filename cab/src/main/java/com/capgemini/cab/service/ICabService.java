package com.capgemini.cab.service;

import java.util.List;

import com.capgemini.cab.domain.Cab;

public interface ICabService {
	public Cab insertCab(Cab cab);
	public Cab updateCab(Cab cab);
	public Cab deleteCab(Cab cab);
	public List<Cab> viewCabsOfType(String carType);
	public int countCabsOfType(String carType);
}