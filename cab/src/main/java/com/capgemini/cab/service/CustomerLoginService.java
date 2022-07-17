package com.capgemini.cab.service;

import java.util.List;

import com.capgemini.cab.domain.CustomerLogin;




public interface CustomerLoginService {
	
	List<CustomerLogin> getAllCustomers();
	
	CustomerLogin saveCustomer(CustomerLogin customer);
	


	CustomerLogin getCustomerByUsername(String username);
	
}
