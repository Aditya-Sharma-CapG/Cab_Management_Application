package com.capgemini.cab.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.capgemini.cab.domain.Cab;
import com.capgemini.cab.domain.CustomerLogin;
import com.capgemini.cab.service.CustomerLoginService;

@RestController
@RequestMapping("/msms")
@CrossOrigin(origins = "http://localhost:3000")
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
	@PostMapping("/customer/login")
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
	
	@DeleteMapping("/delete/customer/{id}")
	public String deleteCustomerById(@PathVariable("id") Long id){
		customerService.deleteCustomerById(id);
		return "customer deleted";
	}
	
	@GetMapping("/customerlogin/{id}")
	public ResponseEntity<CustomerLogin> getCustomerById(@PathVariable Long id) {
		CustomerLogin customerlogin = null;
		customerlogin = customerService.getCustomerById(id);
		return ResponseEntity.ok(customerlogin); 
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<CustomerLogin> updateCab(@RequestBody CustomerLogin customerLogin, @PathVariable("id") Long id) {
		
		return new ResponseEntity<CustomerLogin>(customerService.updateCab(customerLogin, id), HttpStatus.OK);
	}
	

}	
