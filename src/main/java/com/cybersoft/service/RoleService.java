package com.cybersoft.service;

import java.util.List;

import com.cybersoft.dto.RoleDto;

public interface RoleService {

	List<RoleDto> getAll();

	void save(RoleDto role);

	void edit(RoleDto role);

	void deleteById(int id);

	RoleDto getById(int id);

}
