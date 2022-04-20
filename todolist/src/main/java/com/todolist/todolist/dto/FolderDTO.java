package com.todolist.todolist.dto;

import com.todolist.todolist.models.Task;
import lombok.Data;

import java.util.List;

@Data
public class FolderDTO {
    private Long id;
    private String name;
    private List<Task > taskList;
}
