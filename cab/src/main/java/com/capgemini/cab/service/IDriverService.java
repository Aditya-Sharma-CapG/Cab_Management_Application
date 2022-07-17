package com.capgemini.cab.service;

import java.util.List;
import com.capgemini.cab.domain.Driver;

public interface IDriverService {
	public Driver insertDriver(Driver driver);
	public Driver updateDriver(Driver driver);
	public Driver deleteDriver(int driverId);
	public List<Driver>viewBestDrivers();
	public Driver viewDriver(int driverId);
}