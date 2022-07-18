package com.capgemini.cab.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.cab.domain.Admin;
import com.capgemini.cab.repository.IAdminRepository;
import com.capgemini.cab.service.IAdminService;


@Service
public class AdminServiceImpl implements IAdminService{
	@Autowired
	private IAdminRepository adminRepo;
	
	@Override
	public Admin insertAdmin(Admin admin) {
		adminRepo.save(admin);
		return admin;
	}

	@Override
	public Admin updateAdmin(Admin admin) {
		Admin olddetails=adminRepo.findById(admin.getAdminId()).get();
		if(olddetails==null) {
			return null;
		}
		adminRepo.save(admin);
		return admin;
	}

	@Override
	public Admin deleteAdmin(int adminId) {
		Admin olddetails=adminRepo.findById(adminId).get();
		if(olddetails==null) {
			return null;
		}
		adminRepo.deleteById(adminId);
		return olddetails;
	}

	@Override
	public Admin findByEmail(String email) {
		return adminRepo.findByEmail(email);
	}

	@Override
	public Admin findByAdminId(int adminId) {
		return adminRepo.findById(adminId).get();
	}
	
}
