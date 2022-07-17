package com.capgemini.cab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.cab.domain.CustomerLogin;




@Repository
public interface CustomerLoginRepository extends JpaRepository<CustomerLogin, Long> {
	
	public CustomerLogin findByName(String name);
	
	public CustomerLogin findByUsernameAndPassword(String username, String password);
	
	public CustomerLogin findByPhone(String phone);

	public CustomerLogin findByUsername(String username);

}
