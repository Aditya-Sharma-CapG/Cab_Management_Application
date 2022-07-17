package com.capgemini.cab.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AdminExceptionHandler {
	@ExceptionHandler(value=AdminNotFoundException.class)
	public ResponseEntity<String> userNotFoundExceptionHandler(AdminNotFoundException ex){
		return new ResponseEntity<String>("Admin Not Found",HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(value=AdminExistsException.class)
	public ResponseEntity<String> userExistExceptionHandler(AdminExistsException ex){
		return new ResponseEntity<String>("Admin already exists",HttpStatus.NOT_FOUND);
	}
}