package com.capgemini.cab.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.cab.domain.Driver;
import com.capgemini.cab.repository.IDriverRepository;
import com.capgemini.cab.service.IDriverService;

@Service
public class IDriverServiceImpl implements IDriverService {
	
	@Autowired
	private IDriverRepository driverreopository;

	@Override
	public Driver insertDriver(Driver driver) {
		return driverreopository.saveAndFlush(driver);
	}

	@Override
	public Driver updateDriver(Driver driver) {
		return driverreopository.saveAndFlush(driver);
	}

	@Override
	public Driver deleteDriver(int driverId) {
		driverreopository.deleteById(driverId);
		return null;

	}

	@Override
	public List<Driver> viewBestDrivers() {
		List<Driver> bestDrivers = driverreopository.findAll();
	    return bestDrivers.stream().filter(d -> d.getRating() >= 4.5).collect(Collectors.toList());
	}

	@Override
	public Driver viewDriver(int driverId) {
		return driverreopository.findById(driverId).get();
	}

}
