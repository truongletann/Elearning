package com.cybersoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybersoft.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{

}
