package com.cybersoft.controller.admin;

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

import com.cybersoft.dto.RoleDto;
import com.cybersoft.service.RoleService;

//Object name:
//Description:
//Input params:
//Output:
//Creator: Dương
//Version:
//Created on:
@RestController
@RequestMapping("/api/admin/role")
public class AdminRoleController {
	
	@Autowired
	RoleService roleService;

	@GetMapping("")
	public Object get() {	
		try {
			List<RoleDto> listRole = roleService.getAll();	
			return new ResponseEntity<Object>(listRole, HttpStatus.OK);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@GetMapping("{id}")
	public Object get(@PathVariable int id) {	
		try {
			RoleDto role = roleService.getById(id);
			return new ResponseEntity<Object>(role, HttpStatus.OK);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@PostMapping("")
	public Object post(@Valid @RequestBody RoleDto role) {
		try {
			roleService.save(role);	
			return new ResponseEntity<Object>(HttpStatus.CREATED);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@PutMapping("")
	public Object put(@Valid @RequestBody RoleDto role) {
		try {
			roleService.edit(role);
			return new ResponseEntity<Object>(HttpStatus.OK);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@DeleteMapping("{id}")
	public Object delete(@PathVariable int id) {
		try {
			roleService.deleteById(id);
			return new ResponseEntity<Object>(HttpStatus.OK);	
			
		} catch (Exception e) {
			e.printStackTrace();	
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
}
