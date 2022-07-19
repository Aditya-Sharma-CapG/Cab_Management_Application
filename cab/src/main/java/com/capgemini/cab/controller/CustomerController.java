package com.capgemini.cab.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.Customer;
import com.capgemini.cab.service.ICustomerService;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
	
	private ICustomerService customerService;

	public CustomerController(ICustomerService customerService) {
		super();
		this.customerService = customerService;
	}
	
	
	//build REST API for insert Customer
	@PostMapping()
	public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer){
		return new ResponseEntity<Customer>(customerService.saveCustomer(customer),HttpStatus.CREATED);
	}
	// build view all customers REST API
	@GetMapping
	public List<Customer>viewCustomers(){
		return customerService.viewCustomers();}
	// build view customer by id REST API	
	@GetMapping("{id}")
	//http://localhost:8080/api/customers/1
	public ResponseEntity<Customer> viewCustomer(@PathVariable("id") long customerId){
		return new ResponseEntity<Customer>(customerService.viewCustomer(customerId),HttpStatus.OK);
	}
	//build update customers REST API
	//http://localhost:8080/api/customers/1
	@PutMapping("{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable("id")long id,@RequestBody Customer customer){
		return new ResponseEntity<Customer>(customerService.updateCustomer(customer, id),HttpStatus.OK);
	
	}
	// build delete rest api
	//http://localhost:8080/api/customers/1
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable("id") long id){
		//delete customer from DB
		customerService.deleteCustomer(id);
		return new ResponseEntity<String>("Customer deleted successfuly!.",HttpStatus.OK);
	}
}
  