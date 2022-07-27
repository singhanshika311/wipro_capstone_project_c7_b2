package com.homecommerce.dtos;

import com.homecommerce.models.Wishlist;

public class WishlistDTO extends Wishlist {

	private int custid;

	public int getCustid() {
		return custid;
	}

	public void setCustid(int custid) {
		this.custid = custid;
	}
	
}
