package com.cybersoft.dto;

import javax.validation.constraints.NotEmpty;

public class RoleDto {

	private int id;
	
	@NotEmpty(message = "Please Enter Name !")
	private String name;
	
	@NotEmpty(message = "Please Enter Description !")
	private String description;
	
	public RoleDto() {}
	
	public RoleDto(int id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
