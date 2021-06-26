package com.cybersoft.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybersoft.dto.VideoDto;
import com.cybersoft.entity.Video;
import com.cybersoft.repository.VideoRepository;
import com.cybersoft.service.VideoService;

@Service
public class VideoServiceImpl implements VideoService{
	
	@Autowired
	private VideoRepository videoRepository;

	@Override
	public List<VideoDto> getAll() {
		List<Video> entities = videoRepository.findAll();
		List<VideoDto> dtos = new ArrayList<VideoDto>();
		
		for(Video entity : entities) {
			dtos.add(new VideoDto(
					entity.getId(), 
					entity.getTitle(),
					entity.getAvatar(),
					entity.getTimeCount(),
					entity.getUrl(), 
					entity.getCourseId()));
		}
		
		return dtos;
	}

	@Override
	public void save(VideoDto dto) {
		if(dto==null) {
			return;
		}
		
		videoRepository.save(new Video(
				dto.getId(), 
				dto.getTitle(),
				dto.getAvatar(),
				dto.getTimeCount(), 
				dto.getUrl(), 
				dto.getCourseId()));
		
	}

	@Override
	public void edit(VideoDto dto) {
		if(dto==null) {
			return;
		}
		
		videoRepository.saveAndFlush(new Video(
				dto.getId(), 
				dto.getTitle(), 
				dto.getAvatar(),
				dto.getTimeCount(), 
				dto.getUrl(), 
				dto.getCourseId()));
		
	}

	@Override
	public void deleteById(int id) {
		if(id<0) {
			return;
		}
		
		videoRepository.deleteById(id);
		
	}

	@Override
	public VideoDto getById(int id) {
		if(id<0) {
			return null;
		}
		
		Video entity = videoRepository.findById(id).get();
		
		return new VideoDto(
				entity.getId(), 
				entity.getTitle(), 
				entity.getAvatar(),
				entity.getTimeCount(),
				entity.getUrl(), 
				entity.getCourseId());
	}

}
