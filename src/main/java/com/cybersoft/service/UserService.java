package com.cybersoft.service;

import java.util.List;

import com.cybersoft.dto.UserDto;


public interface UserService {

	List<UserDto> getAll();

	void save(UserDto user);

	void edit(UserDto user);

	void deleteById(int id);

	UserDto getById(int id);

}
