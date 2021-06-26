package com.cybersoft.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//Object name:
//Description:
//Input params:
//Output:
//Creator: Thịnh
//Version:
//Created on:
@Configuration
public class CorsConfig implements WebMvcConfigurer{

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/**")
				.allowedOriginPatterns("*")
				.allowedMethods("GET","POST","PUT","DELETE")
				.allowCredentials(false)
				.maxAge(1800);
	}
}
