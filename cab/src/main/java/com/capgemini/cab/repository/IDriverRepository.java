package com.capgemini.cab.repository;

import java.util.List;

import com.capgemini.cab.domain.Driver;
import com.capgemini.cab.exception.DriverNotFoundException;

public interface IDriverRepository {
	public Driver insertDriver(Driver driver);
	public Driver updateDriver(Driver driver)throws DriverNotFoundException;
	public Driver deleteDriver(int driverId)throws DriverNotFoundException;
	public Driver viewDriver(int driverId)throws DriverNotFoundException;
	public List<Driver>viewBestDrivers()throws DriverNotFoundException;
}