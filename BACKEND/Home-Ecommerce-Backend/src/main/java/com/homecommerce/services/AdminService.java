package com.homecommerce.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.homecommerce.models.Admin;
import com.homecommerce.repos.AdminRepository;

@Service
public class AdminService {
	
	@Autowired AdminRepository dao;

	public Admin validate(String userid, String pwd) {
		Optional<Admin> admin=dao.findById(userid);
		if(admin.isPresent() && admin.get().getPwd().equals(pwd)) {
			return admin.get();
		}
		return null;
	}
	
	public void saveAdmin(Admin admin) {
		dao.save(admin);
	}

	public void updateAdmin(Admin admin) {
		if(admin.getPwd().equals("") || admin.getPwd()==null) {
			admin.setPwd(dao.findById(admin.getUserid()).get().getPwd());
		}
		dao.save(admin);		
	}
	
	public long count() {
		return dao.count();
	}
}
