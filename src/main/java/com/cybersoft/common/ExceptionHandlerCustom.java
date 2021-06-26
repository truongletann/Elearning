package com.cybersoft.common;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

//Object name:
//Description:
//Input params:
//Output:
//Creator: Thịnh
//Version:
//Created on:
@ControllerAdvice
public class ExceptionHandlerCustom extends ResponseEntityExceptionHandler{

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<String> errors = new ArrayList<String>();
		
		for(FieldError error : ex.getBindingResult().getFieldErrors()) {
			errors.add(error.getDefaultMessage());
		}
		
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("TimeStamp", new Date());
		body.put("Status", status.value());
		body.put("Error", errors);
		
		return new ResponseEntity<Object>(body, headers, status);
	}
}
