package com.todolist.todolist.services;

import com.todolist.todolist.models.Folder;
import com.todolist.todolist.models.Task;

import java.util.List;

public interface ITaskService {
    Task save(Task task);
    Task get(Long id);
    Boolean delete(Long id);
    List<Task> findAll();
}
