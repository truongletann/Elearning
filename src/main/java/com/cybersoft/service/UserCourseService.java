package com.cybersoft.service;

import java.util.List;

import com.cybersoft.dto.UserCourseDto;

public interface UserCourseService {

	List<UserCourseDto> getAll(int id);

}
