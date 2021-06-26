package com.cybersoft.controller.user;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybersoft.dto.UserDto;
import com.cybersoft.service.UserService;

//Object name:
//Description:
//Input params:
//Output:
//Creator: Trường
//Version:
//Created on:
@RestController
@RequestMapping("/api/user/profile")
public class UserProfileController {
	@Autowired
	UserService userService;

	@GetMapping("")
	public Object get() {	
		try {
			List<UserDto> listUser = userService.getAll();	
			return new ResponseEntity<Object>(listUser, HttpStatus.OK);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@GetMapping("{id}")
	public Object get(@PathVariable int id) {	
		try {
			UserDto user = userService.getById(id);
			return new ResponseEntity<Object>(user, HttpStatus.OK);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@PostMapping("")
	public Object post(@Valid @RequestBody UserDto user) {
		try {
			userService.save(user);	
			return new ResponseEntity<Object>(HttpStatus.CREATED);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@PutMapping("")
	public Object put(@Valid @RequestBody UserDto user) {
		try {
			userService.edit(user);
			return new ResponseEntity<Object>(HttpStatus.OK);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@DeleteMapping("{id}")
	public Object delete(@PathVariable int id) {
		try {
			userService.deleteById(id);
			return new ResponseEntity<Object>(HttpStatus.OK);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
}
