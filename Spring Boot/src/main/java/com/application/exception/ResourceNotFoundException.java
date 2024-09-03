package com.application.exception;

public class ResourceNotFoundException extends RuntimeException{

	public ResourceNotFoundException() {
        super();
    }

    // Constructor with a message
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
