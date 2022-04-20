package com.todolist.todolist.dto;

import lombok.Data;

@Data
public class ResponseDTO {

    private boolean correctProcess;
    private String error;
    private String message;
    private Object data;
}
