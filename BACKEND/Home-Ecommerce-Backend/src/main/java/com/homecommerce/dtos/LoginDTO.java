package com.homecommerce.dtos;

public class LoginDTO {
	private String userid;
	private String pwd;
	private String role;
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
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "LoginDTO [userid=" + userid + ", pwd=" + pwd + ", role=" + role + "]";
	}
	
	
}
