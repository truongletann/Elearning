package com.cybersoft.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybersoft.dto.UserCourseDto;
import com.cybersoft.repository.UserCourseRepository;
import com.cybersoft.service.UserCourseService;

@Service
public class UserCourseServiceImpl implements UserCourseService{
	
	@Autowired
	UserCourseRepository userCourseRepository;

	@Override
	public List<UserCourseDto> getAll(int id) {
		List<UserCourseDto> listUserCourse = userCourseRepository.findAllJoin(id);
		return listUserCourse;
	}

}
