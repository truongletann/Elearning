package com.cybersoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybersoft.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{

}
