package com.cybersoft.service;

import java.util.List;

import com.cybersoft.dto.CategoryDto;

public interface CategoryService {

	List<CategoryDto> getAll();

	void save(CategoryDto category);

	void edit(CategoryDto category);

	void deleteById(int id);

	CategoryDto getById(int id);
}
