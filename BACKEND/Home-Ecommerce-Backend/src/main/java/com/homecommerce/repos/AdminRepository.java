package com.homecommerce.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homecommerce.models.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {

}
