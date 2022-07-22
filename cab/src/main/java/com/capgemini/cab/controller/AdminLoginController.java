package com.capgemini.cab.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.AdminLogin;
import com.capgemini.cab.service.AdminLoginService;

@CrossOrigin()
@RestController
@RequestMapping("/msms")
public class AdminLoginController {

	private static final Logger LOGGER = LogManager.getLogger(AdminLoginController.class);

	@Autowired
	private AdminLoginService adminService;
	
	@GetMapping("/get/Admin")
	public List<AdminLogin> getAdmin(){
		LOGGER.info("Inside get all customers method of customer controller");
		return adminService.getAdmin();	
	}

}
