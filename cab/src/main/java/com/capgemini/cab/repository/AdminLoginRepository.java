package com.capgemini.cab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.cab.domain.AdminLogin;

@Repository
public interface AdminLoginRepository extends JpaRepository<AdminLogin, Long> {
	
	AdminLogin findByUsernameAndPassword(String username, String password);

	AdminLogin findByUsername(String username);

}
