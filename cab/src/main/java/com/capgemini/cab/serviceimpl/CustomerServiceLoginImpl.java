package com.capgemini.cab.serviceimpl;

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
		return customerRepository.findAll();
	}

	@Override
	public CustomerLogin saveCustomer(CustomerLogin customer) {
		return customerRepository.save(customer);
	}

	@Override
	public CustomerLogin getCustomerByUsername(String username) {
		return null;
	}

}