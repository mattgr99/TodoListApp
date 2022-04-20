package com.todolist.todolist.exceptions;

public class CRequestException extends RuntimeException{

    public CRequestException(String message) {
        super(message);
    }

    public CRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}
