package com.capgemini.cab.serviceimpl;

import java.util.List;

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
	public List<AdminLogin> getAdmin() {
		return adminRepository.findAll();
	}

}
