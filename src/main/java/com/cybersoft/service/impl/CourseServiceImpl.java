package com.cybersoft.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybersoft.dto.CourseDto;
import com.cybersoft.entity.Course;
import com.cybersoft.repository.CourseRepository;
import com.cybersoft.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseRepository courseRepository;

	@Override
	public List<CourseDto> getAll() {
		List<Course> entities = courseRepository.findAll();
		List<CourseDto> dtos = new ArrayList<CourseDto>();
		
		for(Course entity : entities) {
			dtos.add(new CourseDto(
					entity.getId(),
					entity.getTitle(), 
					entity.getImage(), 
					entity.getLeturesCount(), 
					entity.getHourCount(), 
					entity.getLastUpdate(), 
					entity.getViewCount(), 
					entity.getPrice(), 
					entity.getDiscount(), 
					entity.getPromotionPrice(), 
					entity.getDescription(), 
					entity.getCategoryId()));
		}
		
		return dtos;
	}

	@Override
	public CourseDto getById(int id) {
		if(id<0) {
			return null;
		}
		
		Course entity = courseRepository.findById(id).get();
		
		return new CourseDto(
				entity.getId(),
				entity.getTitle(), 
				entity.getImage(), 
				entity.getLeturesCount(), 
				entity.getHourCount(), 
				entity.getLastUpdate(), 
				entity.getViewCount(), 
				entity.getPrice(), 
				entity.getDiscount(), 
				entity.getPromotionPrice(), 
				entity.getDescription(), 
				entity.getCategoryId());
	
	}

	@Override
	public void add(CourseDto dto) {
		if(dto==null) {
			return;
		}
		
		courseRepository.save(new Course(
				dto.getId(),
				dto.getTitle(), 
				dto.getImage(), 
				dto.getLeturesCount(), 
				dto.getHourCount(), 
				dto.getLastUpdate(), 
				dto.getViewCount(), 
				dto.getPrice(), 
				dto.getDiscount(), 
				dto.getPromotionPrice(), 
				dto.getDescription(), 
				dto.getCategoryId()));
		
	}

	@Override
	public void update(CourseDto dto) {
		if(dto==null) {
			return;
		}
		
		courseRepository.saveAndFlush(new Course(
				dto.getId(),
				dto.getTitle(), 
				dto.getImage(), 
				dto.getLeturesCount(), 
				dto.getHourCount(), 
				dto.getLastUpdate(), 
				dto.getViewCount(), 
				dto.getPrice(), 
				dto.getDiscount(), 
				dto.getPromotionPrice(), 
				dto.getDescription(), 
				dto.getCategoryId()));
		
	}

	@Override
	public void deleteById(int id) {
		if(id<0) {
			return;
		}
		
		courseRepository.deleteById(id);
		
	}

}
