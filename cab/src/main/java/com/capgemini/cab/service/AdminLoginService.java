package com.capgemini.cab.service;

import com.capgemini.cab.domain.AdminLogin;

public interface AdminLoginService {

	AdminLogin getAdminByUserName(String username);

}
