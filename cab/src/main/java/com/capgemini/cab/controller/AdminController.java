package com.capgemini.cab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.Admin;
import com.capgemini.cab.exception.AdminExistsException;
import com.capgemini.cab.exception.AdminNotFoundException;
import com.capgemini.cab.service.IAdminService;

@RestController
@RequestMapping("/cab/")
public class AdminController {
	@Autowired
	private IAdminService adminService;
	
	@PostMapping("addadmin")
	public String addAdmin(@RequestBody Admin ad) {
		
		Admin opt=adminService.findByEmail(ad.getEmail());
		if(opt==null) {
			adminService.insertAdmin(ad);
		}
		else {
		throw new AdminExistsException();
		}
		return "Admin added";
	}
	@PatchMapping("updateadmin")
	public String updateUser(@RequestBody Admin ad) {
		Admin opt=adminService.findByAdminId(ad.getAdminId());
		if(opt==null) {
			throw new AdminNotFoundException();
		}
		else {
		adminService.updateAdmin(ad);
		}
		return "Admin modified";
	}
	@DeleteMapping("deleteadmin")
	public String deleteAdmin(@RequestBody Admin ad) {
		Admin opt=adminService.findByAdminId(ad.getAdminId());
		if(opt==null) {
			throw new AdminNotFoundException();
		}
		else {
		adminService.deleteAdmin(ad.getAdminId());
		}
		return "Admin deleted";
	}
}
