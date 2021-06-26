package com.cybersoft.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

public class VideoDto {

	
	private int id;
	
	@NotEmpty(message = "Please Enter Title !")
	private String title;
	
	@NotEmpty(message = "Please Enter Avatar !")
	private String avatar;
	
	@Min(1)
	private int timeCount;
	
	@NotEmpty(message = "Please Enter Url !")
	private String url;
	
	
	private int courseId;

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

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

	public int getTimeCount() {
		return timeCount;
	}

	public void setTimeCount(int timeCount) {
		this.timeCount = timeCount;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public VideoDto() {
		
	}

	public VideoDto(int id, String title, String avatar ,int timeCount, String url, int courseId) {
		
		this.id = id;
		this.title = title;
		this.timeCount = timeCount;
		this.url = url;
		this.courseId = courseId;
		this.avatar = avatar;
	}
	
	
}
