package com.cybersoft.service;

import java.util.List;

import com.cybersoft.dto.TargetDto;

public interface TargetService {

	List<TargetDto> getAll();
	TargetDto getById(int id);
	void add(TargetDto dto);
	void edit(TargetDto dto);
	void deleteById(int id);
}
