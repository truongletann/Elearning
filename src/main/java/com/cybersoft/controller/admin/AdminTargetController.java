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

import com.cybersoft.dto.TargetDto;
import com.cybersoft.service.TargetService;

//Object name:
//Description:
//Input params:
//Output:
//Creator: Dương
//Version:
//Created on:
@RestController
@RequestMapping("/api/admin/target")
public class AdminTargetController {

	@Autowired
	private TargetService targetService;
	
	@GetMapping("")
	public Object get() {
		try {
			List<TargetDto> listTarget = targetService.getAll();
			return new ResponseEntity<Object>(listTarget, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("{id}")
	public Object get(@PathVariable int id) {
		try {
			TargetDto target = targetService.getById(id);
			return new ResponseEntity<Object>(target, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("")
	public Object post(@Valid @RequestBody TargetDto dto) {
		try {
			targetService.add(dto);
			return new ResponseEntity<Object>(HttpStatus.CREATED);
			
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("")
	public Object put(@Valid @RequestBody TargetDto dto) {
		try {
			targetService.edit(dto);
			return new ResponseEntity<Object>(HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@DeleteMapping("{id}")
	public Object delete(@PathVariable int id) {
		try {
			targetService.deleteById(id);
			return new ResponseEntity<Object>(HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
}

