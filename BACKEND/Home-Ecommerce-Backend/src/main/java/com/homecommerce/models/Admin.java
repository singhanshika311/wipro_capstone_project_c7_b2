package com.homecommerce.models;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Admin {

	@Id
	private String userid;
	@JsonIgnore
	private String pwd;
	private String uname;
	
	
	public Admin() {
		// TODO Auto-generated constructor stub
	}
	public Admin(String userid, String pwd, String uname) {
		this.userid = userid;
		this.pwd = pwd;
		this.uname = uname;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	@Override
	public String toString() {
		return "Admin [userid=" + userid + ", pwd=" + pwd + ", uname=" + uname + "]";
	}
	
}
