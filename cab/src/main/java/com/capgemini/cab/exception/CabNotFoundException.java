package com.capgemini.cab.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CabNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9090587718141879101L;
	
	public CabNotFoundException() {
		super();
	}
	
	public CabNotFoundException(String errMsg) {
		super(errMsg);
	}

}
