package com.cybersoft.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

public class LoginDto {

	@NotEmpty(message = "Please enter your email !")
	@Email(message = "Invalid email !")
	private String email;
	
	@NotEmpty(message = "Please enter your password !")
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
