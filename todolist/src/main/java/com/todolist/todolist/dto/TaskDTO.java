package com.todolist.todolist.dto;

import lombok.Data;

@Data
public class TaskDTO {
    private Long id;
    private String description;
    private Boolean isDone;
}
