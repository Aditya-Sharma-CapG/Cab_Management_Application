package com.capgemini.cab.service;


import java.util.List;

import com.capgemini.cab.domain.Admin;

public interface IAdminService {
	
	public Admin insertAdmin(Admin admin);
	public List<Admin> getAllAdmins();
	public Admin updateAdmin(Admin admin);
	public Admin deleteAdmin(int adminId);
	public Admin findByEmail(String email);
	public Admin findByAdminId(int adminId);
}