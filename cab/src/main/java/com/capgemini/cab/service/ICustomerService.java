package com.capgemini.cab.service;

import java.util.List;

import com.capgemini.cab.domain.Customer;

public interface ICustomerService {
	public Customer saveCustomer(Customer customer);
	public Customer updateCustomer(Customer customer,long id);
	public void deleteCustomer(long id);
	public List<Customer>viewCustomers();
	public Customer viewCustomer(long id);
}