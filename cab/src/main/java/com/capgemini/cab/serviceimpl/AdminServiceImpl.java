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
<<<<<<< HEAD:cab/src/main/java/com/capgemini/cab/serviceImpl/AdminServiceImpl.java
		Admin details =adminRepo.findByEmail(email);
		if(details==null) {
			return null;
		}
		else {
			return details;
		}
		
=======
		return adminRepo.findByEmail(email);
>>>>>>> 6e3d5098a0d9d4454f8555a6e57d3cdafc7e9563:cab/src/main/java/com/capgemini/cab/serviceimpl/AdminServiceImpl.java
	}

	@Override
	public Admin findByAdminId(int adminId) {
<<<<<<< HEAD:cab/src/main/java/com/capgemini/cab/serviceImpl/AdminServiceImpl.java
		Admin details;
		if(adminRepo.existsById(adminId)) {
			details=adminRepo.findById(adminId).get();
		}
		else {
			return null;
		}
		return details;
=======
		return adminRepo.findById(adminId).get();
>>>>>>> 6e3d5098a0d9d4454f8555a6e57d3cdafc7e9563:cab/src/main/java/com/capgemini/cab/serviceimpl/AdminServiceImpl.java
	}
	
}
