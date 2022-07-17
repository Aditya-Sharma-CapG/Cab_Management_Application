package com.capgemini.cab.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.cab.domain.Customer;

@Repository
public interface ICustomerRepository extends CrudRepository<Customer,Long> {
}