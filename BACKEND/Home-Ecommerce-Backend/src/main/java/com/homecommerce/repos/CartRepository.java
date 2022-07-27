package com.homecommerce.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homecommerce.models.Cart;
import com.homecommerce.models.Customer;
import com.homecommerce.models.Product;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	List<Cart> findByCustomer(Customer cust);
	Cart findByCustomerAndProduct(Customer customer,Product product);
	void deleteByCustomer(Customer cust);
}
