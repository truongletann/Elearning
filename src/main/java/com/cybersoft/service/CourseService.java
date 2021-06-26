package com.cybersoft.service;

import java.util.List;

import com.cybersoft.dto.CourseDto;

public interface CourseService {
	
	List<CourseDto> getAll();
	CourseDto getById(int id);
	void add(CourseDto dto);
	void update(CourseDto dto);
	void deleteById(int id);
}
