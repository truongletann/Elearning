package com.cybersoft.controller.admin;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybersoft.dto.LoginDto;
import com.cybersoft.service.AuthService;

//Object name:
//Description:
//Input params:
//Output:
//Creator: Dương
//Version:
//Created on:
@RestController
@RequestMapping("/api/admin/auth")
public class AdminAuthController {
	
	@Autowired
	private AuthService authService;

	@PostMapping("login")
	public Object post(@Valid @RequestBody LoginDto account) {
		try {
			String token = authService.login(account);
			return new ResponseEntity<Object>(token, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
}
