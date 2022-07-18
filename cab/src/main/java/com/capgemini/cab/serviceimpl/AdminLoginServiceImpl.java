package com.capgemini.cab.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.cab.domain.AdminLogin;
import com.capgemini.cab.repository.AdminLoginRepository;
import com.capgemini.cab.service.AdminLoginService;




@Service
public class AdminLoginServiceImpl implements AdminLoginService {
	
	@Autowired
	private AdminLoginRepository adminRepository;


	@Override
	public AdminLogin getAdminByUserName(String username) {
		AdminLogin admin = adminRepository.findByUsername(username);
		if(admin != null) {
			return admin;
		}
		else {
			return null;
		}
	}

}