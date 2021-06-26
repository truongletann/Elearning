package com.cybersoft.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybersoft.dto.UserDetailDto;

@RestController
@RequestMapping("/api/account")
public class AccountInfoController {

	@GetMapping("")
	public Object get() {
		try {
			UserDetailDto userDetail = (UserDetailDto) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			return new ResponseEntity<Object>(userDetail, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
}
