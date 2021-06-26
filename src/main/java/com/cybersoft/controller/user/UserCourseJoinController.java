package com.cybersoft.controller.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybersoft.dto.UserCourseDto;
import com.cybersoft.service.UserCourseService;

//Object name:
//Description:
//Input params:
//Output:
//Creator: Dương
//Version:
//Created on:
@RestController
@RequestMapping("/api/user/usercourse")
public class UserCourseJoinController {
	@Autowired
	private UserCourseService userCourseService;
	
	@GetMapping("{id}")
	public Object get(@PathVariable int id) {
		try {
			List<UserCourseDto> listUserCourse = userCourseService.getAll(id);
			return new ResponseEntity<Object>(listUserCourse, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			
		}
	}
}
