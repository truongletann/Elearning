package com.cybersoft.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cybersoft.service.FileService;

@Service
public class FileServiceImpl implements FileService {

	@Value("${file.upload-dir}")
	private String uploadDir;
	
	@Override
	public String saveFile(MultipartFile file) {
		try {
			// LẤY RA FILE HÌNH
			String fileName = file.getOriginalFilename();
			// LƯU FILE VÀO THƯ MỤC
			Path filePath = Paths.get(uploadDir + fileName);
			
			Files.write(filePath, file.getBytes());
			
			return fileName;
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

}
