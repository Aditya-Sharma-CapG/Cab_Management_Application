package com.capgemini.cab.serviceImpl;

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
		// TODO Auto-generated method stub
		return driverreopository.saveAndFlush(driver);
	}

	@Override
	public Driver updateDriver(Driver driver) {
		// TODO Auto-generated method stub
		return driverreopository.saveAndFlush(driver);
	}

	@Override
	public Driver deleteDriver(int driverId) {
		// TODO Auto-generated method stub
		driverreopository.deleteById(driverId);
		return null;

	}

	@Override
	public List<Driver> viewBestDrivers() {
		// TODO Auto-generated method stub
		List<Driver> bestDrivers = driverreopository.findAll();
	    return bestDrivers.stream().filter((d) -> d.getRating() >= 4.5).collect(Collectors.toList());
	}

	@Override
	public Driver viewDriver(int driverId) {
		// TODO Auto-generated method stub
		return driverreopository.findById(driverId).get();
	}

}
