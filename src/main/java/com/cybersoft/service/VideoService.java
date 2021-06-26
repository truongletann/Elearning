package com.cybersoft.service;

import java.util.List;

import com.cybersoft.dto.VideoDto;

public interface VideoService {

	List<VideoDto> getAll();

	void save(VideoDto dto);

	void edit(VideoDto dto);

	void deleteById(int id);

	VideoDto getById(int id);

}
