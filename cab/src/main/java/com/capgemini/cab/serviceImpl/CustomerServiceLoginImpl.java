package com.capgemini.cab.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.cab.domain.CustomerLogin;
import com.capgemini.cab.repository.CustomerLoginRepository;
import com.capgemini.cab.service.CustomerLoginService;



@Service
public class CustomerServiceLoginImpl implements CustomerLoginService {
	@Autowired
	private CustomerLoginRepository customerRepository;

	@Override
	public List<CustomerLogin> getAllCustomers() {
		// TODO Auto-generated method stub
		return customerRepository.findAll();
	}

	@Override
	public CustomerLogin saveCustomer(CustomerLogin customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer);
	}

	@Override
	public CustomerLogin getCustomerByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}



	
}