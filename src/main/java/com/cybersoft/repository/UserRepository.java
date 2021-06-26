package com.cybersoft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cybersoft.dto.UserDto;
import com.cybersoft.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	@Query("select new com.cybersoft.dto.UserDto(u.id, u.fullname, u.email, r.description) from User u join Role r on u.roleId = r.id")
	List<UserDto> findAllJoin();
	
	@Query("SELECT u FROM User u WHERE u.email = :email")
	public User findByEmail(@Param("email") String email);

}
