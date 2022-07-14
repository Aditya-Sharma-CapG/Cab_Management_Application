package com.capgemini.cab.repository;

import java.util.List;

import com.capgemini.cab.domain.Customer;
import com.capgemini.cab.exception.CustomerNotFoundException;

public interface ICustomerRepository {
	public Customer insertCustomer(Customer customer);
	public Customer updateCustomer(Customer customer) throws CustomerNotFoundException;
	public Customer deleteCustomer(Customer customer) throws CustomerNotFoundException;
	public List<Customer>viewCustomers() throws CustomerNotFoundException;
	public Customer viewCustomer(int customerId) throws CustomerNotFoundException;
	public Customer validateCustomer(String username, String password) throws CustomerNotFoundException;
}