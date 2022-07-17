package com.capgemini.cab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.Driver;
import com.capgemini.cab.exception.DriverNotFoundException;
import com.capgemini.cab.service.IDriverService;

import java.util.List;

@RestController
@RequestMapping("/driver")
public class DriverController {
	@Autowired
	IDriverService idriverservice;
	
	@PostMapping("/insertcustomer")
	public String insertDriver(@RequestBody Driver driver) {
		idriverservice.insertDriver(driver);
		return "driver added";
	}
	
	@GetMapping("/{driverId}")
	public Driver viewDriver(@PathVariable int driverId) throws DriverNotFoundException {
		Driver driver = null;
		try {
			driver = idriverservice.viewDriver(driverId);

		} catch (Exception e) {
			throw new DriverNotFoundException("Driver Not Found!");
		}
		return driver;
	}
	/** It will delete the driver 
	 * with the matching driverId**/
	
	@DeleteMapping("/{driverId}")
	public Driver deleteDriver(@PathVariable int driverId) throws DriverNotFoundException {
		Driver d = null;
		try {
			d = idriverservice.deleteDriver(driverId);
		} catch (Exception e) {
			throw new DriverNotFoundException("Driver Not FOund To Delete!");
		}
		return d;
	}
	
	/** It will return the list of best
	 *  drivers whose rating is above 4.5**/
	
	@GetMapping("/bestdrivers")
	public List<Driver> viewBestDrivers() throws DriverNotFoundException {
		List<Driver> lis = null;
		try {
			lis = idriverservice.viewBestDrivers();
		} catch (Exception e) {
			throw new DriverNotFoundException("Best Drivers List is Empty");
		}
		return lis;
	}


}
