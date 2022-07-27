package com.homecommerce.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.homecommerce.models.Address;
import com.homecommerce.repos.AddressRepository;

@Service
public class AddressService {

	@Autowired AddressRepository dao;
	
	public Address saveAddress(Address address) {
		return dao.save(address);
	}

	public Address findAddress(int id) {
		return dao.findById(id).get();
	}
}
