package com.cybersoft.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybersoft.dto.TargetDto;
import com.cybersoft.entity.Target;
import com.cybersoft.repository.TargetRepository;
import com.cybersoft.service.TargetService;

@Service
public class TargetServiceImpl implements TargetService{
	
	@Autowired
	private TargetRepository targetRepository;

	@Override
	public List<TargetDto> getAll() {
		List<Target> entities = targetRepository.findAll();
		List<TargetDto> dtos = new ArrayList<TargetDto>();
		
		for(Target entity : entities) {
			dtos.add(new TargetDto(
					entity.getId(), 
					entity.getTitle(), 
					entity.getCourseId()));
		}
		
		return dtos;
	}

	@Override
	public TargetDto getById(int id) {
		if(id<0) {
			return null;
		}
		
		Target entity = targetRepository.findById(id).get();
		
		return new TargetDto(entity.getId(), 
					entity.getTitle(), 
					entity.getCourseId());
	}

	@Override
	public void add(TargetDto dto) {
		if(dto==null) {
			return;
		}
		
		targetRepository.save(new Target(
				dto.getId(), 
				dto.getTitle(), 
				dto.getCourseId()));
		
	}

	@Override
	public void edit(TargetDto dto) {
		if(dto==null) {
			return;
		}
		
		targetRepository.saveAndFlush(new Target(
				dto.getId(), 
				dto.getTitle(), 
				dto.getCourseId()));
		
	}

	@Override
	public void deleteById(int id) {
		if(id<0) {
			return;
		}
		
		targetRepository.deleteById(id);
		
	}

}
