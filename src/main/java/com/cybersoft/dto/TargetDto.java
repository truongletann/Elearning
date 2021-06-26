package com.cybersoft.dto;

import javax.validation.constraints.NotEmpty;

public class TargetDto {

	private int id;	
	
	@NotEmpty(message = "Please Enter Title !")
	private String title;
	
	private int courseId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public TargetDto() {
	
	}

	public TargetDto(int id, String title, int courseId) {
	
		this.id = id;
		this.title = title;
		this.courseId = courseId;
	}
	
	
}
