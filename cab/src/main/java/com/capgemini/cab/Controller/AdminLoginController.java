package com.capgemini.cab.Controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.AdminLogin;
import com.capgemini.cab.service.AdminLoginService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/msms/v1")
public class AdminLoginController {

	private static final Logger LOGGER = LogManager.getLogger(AdminLoginController.class);

	@Autowired
	private AdminLoginService adminService;

	@GetMapping("/admin/{username}")
	public AdminLogin getAdminByUserName(@PathVariable String username) {
		LOGGER.info("Inside get admin by username method of admin controller");
		return adminService.getAdminByUserName(username);
	}

}
