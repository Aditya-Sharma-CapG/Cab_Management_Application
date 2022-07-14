package com.capgemini.cab.repository;

import java.util.List;

import com.capgemini.cab.domain.Cab;
import com.capgemini.cab.exception.CabNotFoundException;

public interface ICabRepository {
	public Cab insertCab(Cab cab);
	public Cab updateCab(Cab cab) throws CabNotFoundException;
	public Cab deleteCab(Cab cab) throws CabNotFoundException;
	public List<Cab> viewCabsOfType(String carType) throws CabNotFoundException;
	public int countCabsOfType(String carType) throws CabNotFoundException;
}