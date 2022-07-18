package com.capgemini.cab.exception;

public class AdminExistsException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1093950718742601218L;
	
	public AdminExistsException() {
		super();
	}
	
	public AdminExistsException(String errMsg) {
		super(errMsg);
	}
}
