package com.capgemini.cab.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.CustomerLogin;
import com.capgemini.cab.service.CustomerLoginService;






@RestController
@RequestMapping("/msms/v1")
public class CustomeLoginrController {
	
	private static final Logger LOGGER = LogManager.getLogger(CustomeLoginrController.class);
	
	@Autowired
	private CustomerLoginService customerService;
	
	//Get list of customers
	@GetMapping("/get/customer")
	public List<CustomerLogin> getCustomers(){
		LOGGER.info("Inside get all customers method of customer controller");
		return customerService.getAllCustomers();	}
	
	//Create a customer
	@PostMapping("/customer/Login")
	public ResponseEntity<CustomerLogin> createCustomer(@RequestBody CustomerLogin customer) {
		LOGGER.info("Inside create customer method of customer controller");
		CustomerLogin saveCustomer = customerService.saveCustomer(customer);
		return ResponseEntity.ok(saveCustomer);
	}
	

	//Get a customer by name
	@GetMapping("/customer/username/{username}")
	public CustomerLogin getCustomerByName(@PathVariable String username) {
		LOGGER.info("Inside get customer name of customer controller");
		return customerService.getCustomerByUsername(username);
		
	}
	

}	
