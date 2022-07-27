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
import com.homecommerce.models.Category;
import com.homecommerce.services.CategoryService;

@CrossOrigin
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

	@Autowired private CategoryService cservice;
	
	@PostMapping
	public ResponseEntity<?> saveCategory(@RequestBody Category cat) {
		cservice.save(cat);
		return Response.success("Category saved");
	}
	
	@GetMapping
	public List<Category> listall(){
		return cservice.listAll();
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteCategory(@PathVariable("id") int id){
		cservice.deleteCategory(id);
		return Response.success("Category deleted successfully");
	}
}
