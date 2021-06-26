package com.cybersoft.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybersoft.dto.CategoryDto;
import com.cybersoft.entity.Category;
import com.cybersoft.repository.CategoryRepository;
import com.cybersoft.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public List<CategoryDto> getAll() {
		List<CategoryDto> listCategoryDto = new ArrayList<CategoryDto>();
		List<Category> listCategory = categoryRepository.findAll();
		
		for(Category entity : listCategory) {
			listCategoryDto.add(new CategoryDto(
					entity.getId(),
					entity.getTitle(),
					entity.getIcon()));
		}
		
		return listCategoryDto;
	}

	@Override
	public void save(CategoryDto category) {
		if(category == null) {
			return;
		}
		
		Category entity = new Category(
				category.getId(), 
				category.getTitle(), 
				category.getIcon());
		
		categoryRepository.save(entity);
		
	}

	@Override
	public void edit(CategoryDto category) {
		if(category == null) {
			return;
		}
		
		Category entity = new Category(
				category.getId(), 
				category.getTitle(), 
				category.getIcon());
		
		categoryRepository.saveAndFlush(entity);
		
	}

	@Override
	public void deleteById(int id) {
		if(id<0) {
			return;
		}
		
		categoryRepository.deleteById(id);
		
	}

	@Override
	public CategoryDto getById(int id) {
		if(id<0) {
			return null;
		}
		
		Category entity = categoryRepository.findById(id).get();
		
		return new CategoryDto(entity.getId(), entity.getTitle(), entity.getIcon());
	}

}
