package com.cybersoft.service.impl;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybersoft.dto.UserDto;
import com.cybersoft.entity.User;
import com.cybersoft.repository.UserRepository;
import com.cybersoft.service.UserService;


@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;
	
//	@Autowired
//	RoleRepository roleRepository;

	@Override
	public void save(UserDto dto) {
		if(dto==null) {
			return;
		}
		
		User entity = transToEntity(dto);
		entity.setPassword(BCrypt.hashpw(entity.getPassword(), BCrypt.gensalt()));
		System.out.println(entity.getPassword());
		userRepository.save(entity);
		
	}

	@Override
	public List<UserDto> getAll() {
		
//		List<User> listEntity = userRepository.findAll();
//		List<UserDto> listDto = new ArrayList<UserDto>();
//
//		for (User entity : listEntity) {
//			UserDto dto = transToDto(entity);
//			dto.setRoleDesc(roleRepository.findById(dto.getRoleId()).get().getDescription());
//			listDto.add(dto);
//		}
		 
		List<UserDto> listDto = userRepository.findAllJoin();
		return listDto;
	}

	@Override
	public UserDto getById(int id) {
		if(id<0) {
			return new UserDto();
		}
		
		return transToDto(userRepository.findById(id).get());
	}

	@Override
	public void edit(UserDto dto) {
		if(dto==null) {
			return;
		}
		
		User user = transToEntity(dto);
		user.setPassword(BCrypt.hashpw(dto.getPassword(), BCrypt.gensalt()));
		
		userRepository.saveAndFlush(user);
	}

	@Override
	public void deleteById(int id) {
		if(id<0) {
			return;
		}
		
		userRepository.deleteById(id);
	}
	
	public UserDto transToDto(User entity) {
		return new UserDto(entity.getId(), entity.getFullname(), entity.getEmail(), entity.getPassword(), entity.getAvatar(), entity.getRoleId());	
	}
	
	public User transToEntity(UserDto dto) {
		return new User(dto.getId(), dto.getEmail(), dto.getPassword(), dto.getFullname(), dto.getAvatar(), dto.getRoleId());	
		
	}

}
