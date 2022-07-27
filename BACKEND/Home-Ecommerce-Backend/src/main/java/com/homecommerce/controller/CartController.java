package com.homecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homecommerce.dtos.Response;
import com.homecommerce.models.Cart;
import com.homecommerce.services.CartService;

@CrossOrigin
@RestController
@RequestMapping("/api/cart")
public class CartController {

	@Autowired private CartService service;
	
	@PostMapping
	public ResponseEntity<?> saveItem(@RequestBody Cart wl) {
		System.out.println(wl);
		if(service.checkexist(wl.getCustomer(), wl.getProduct())) {
			return ResponseEntity.badRequest().body("Item already exists");
		}
		service.save(wl);
		return Response.success("Item saved into cart");
	}
	
	@GetMapping("updateqty")
	public ResponseEntity<?> updateQty(int cartid,int qty){
		service.updateQty(cartid, qty);
		return Response.success("quantity updated");
	}
	
	@GetMapping
	public List<Cart> listall(int custid){
		return service.findByuserid(custid);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteItem(@PathVariable("id") int id){
		service.deleteItem(id);
		return Response.success("item deleted successfully");
	}
}
