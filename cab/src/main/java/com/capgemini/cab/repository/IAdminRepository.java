package com.capgemini.cab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.cab.domain.Admin;
@Repository
public interface IAdminRepository extends JpaRepository<Admin,Integer>{
	Admin findByEmail(String email);
}