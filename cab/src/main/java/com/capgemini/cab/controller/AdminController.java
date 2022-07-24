package com.capgemini.cab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.Admin;
import com.capgemini.cab.exception.AdminExistsException;
import com.capgemini.cab.exception.AdminNotFoundException;
import com.capgemini.cab.repository.IAdminRepository;
import com.capgemini.cab.service.IAdminService;

@RestController
@RequestMapping("/cab/admin")
@CrossOrigin
public class AdminController {
	
	@Autowired
	private IAdminService adminService;
	
	@Autowired
	private IAdminRepository adminRepo;
	
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
	
	@GetMapping("/getAll")
	public List<Admin> getAllAdmins() {
		return adminService.getAllAdmins();
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
	
	@DeleteMapping("deleteadmin/{id}")
	public String deleteAdmin(@PathVariable("id") int adminId) {
		if(!adminRepo.existsById(adminId)) {
			throw new AdminNotFoundException();
		}
		adminService.deleteAdmin(adminId);
		return "Admin deleted successfully";
	}

}
