package com.cybersoft.dto;

import javax.validation.constraints.NotEmpty;

public class UserDto {
	
	private int id;
	
	@NotEmpty(message = "Please Enter Fullname !")
	private String fullname;
	
	@NotEmpty(message = "Please Enter Email !")
	private String email;
	
	@NotEmpty(message = "Please Enter Password !")
	private String password;
	
	@NotEmpty(message = "Please Enter Avatar !")
	private String avatar;

	private int roleId;
	
	private String roleDesc;
	
	public UserDto() {}
	
	public UserDto(int id, String fullname, String email, String roleDesc) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.email = email;
		this.roleDesc = roleDesc;
	}
	
	public UserDto(int id, String fullname, String email, String password, String avatar, int roleId) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.email = email;
		this.password = password;
		this.avatar = avatar;
		this.roleId = roleId;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRoleDesc() {
		return roleDesc;
	}
	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
}
