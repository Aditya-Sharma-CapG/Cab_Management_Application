package com.capgemini.cab.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.capgemini.cab.domain.Customer;
import com.capgemini.cab.exception.CustomerNotFoundException;
import com.capgemini.cab.repository.ICustomerRepository;
import com.capgemini.cab.service.ICustomerService;

@Service
public class CustomerServiceImpl implements ICustomerService{
	private ICustomerRepository customerRepository;
	
	public CustomerServiceImpl(ICustomerRepository customerRepository) {
		super();
		this.customerRepository = customerRepository;
	}

	@Override
	public Customer saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer);
	}

	@Override
	public Customer updateCustomer(Customer customer,long id) {
		//we need to check whether customer with given id is existing in DB or not
		Customer existingCustomer=customerRepository.findById(id).orElseThrow(()->new CustomerNotFoundException("Customer","Id",id));
		existingCustomer.setUsername(customer.getUsername());
		existingCustomer.setPassword(customer.getPassword());
		existingCustomer.setEmail(customer.getEmail());
		existingCustomer.setAddress(customer.getAddress());
		existingCustomer.setMobilenumber(customer.getMobilenumber());
		//save existing customer in DB
		customerRepository.save(existingCustomer);
		return existingCustomer;
	}

	@Override
	public void deleteCustomer(long id) {
		customerRepository.findById(id).orElseThrow(() ->new CustomerNotFoundException("Customer","Id",id));
		customerRepository.deleteById(id);
	}

	@Override
	public List<Customer> viewCustomers() {
		// TODO Auto-generated method stub
		return (List<Customer>) customerRepository.findAll();
	}
	@Override
	public Customer viewCustomer(long id) {
		// TODO Auto-generated method stub
		return customerRepository.findById(id).orElseThrow(() -> new CustomerNotFoundException("Customer","Id",id));            
	}

//	@Override
//	public Customer validateCustomer(String username, String password) {
//		// TODO Auto-generated method stub
//		return null;
//	}


}
