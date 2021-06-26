package com.cybersoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybersoft.entity.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Integer>{

}
