package com.capgemini.cab.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.cab.domain.Cab;
import com.capgemini.cab.domain.CustomerLogin;
import com.capgemini.cab.exception.CabNotFoundException;
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
	
	@Override
	public void deleteCustomerById(Long id) {
		customerRepository.findById(id);
		customerRepository.deleteById(id);
	}

	@Override
	public CustomerLogin getCustomerById(Long id) {
		return customerRepository.findById(id).get();
	}

	@Override
	public CustomerLogin updateCab(CustomerLogin customerLogin, Long id) {
		CustomerLogin existingCustomer = customerRepository.findById(id).orElseThrow(
				() -> new CabNotFoundException("Cab doesn't not exists with id " + id));
		
		existingCustomer.setName(customerLogin.getName());
		existingCustomer.setPassword(customerLogin.getPassword());
		existingCustomer.setPhone(customerLogin.getPhone());
		existingCustomer.setPincode(customerLogin.getPincode());
		existingCustomer.setUsername(customerLogin.getUsername());
		existingCustomer.setVillage(customerLogin.getVillage());
		customerRepository.save(existingCustomer);
		
		return existingCustomer;
	}

}