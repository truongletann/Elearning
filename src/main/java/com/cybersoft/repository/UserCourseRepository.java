package com.cybersoft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cybersoft.dto.UserCourseDto;
import com.cybersoft.entity.UserCourse;

@Repository
public interface UserCourseRepository extends JpaRepository<UserCourse, Integer>{

	@Query("SELECT new com.cybersoft.dto.UserCourseDto(c.title, c.image, c.description)"
			+ " FROM Course c JOIN UserCourse u ON c.id = u.userId where u.userId = :userId")
	public List<UserCourseDto> findAllJoin(@Param("userId")int id); 
}
