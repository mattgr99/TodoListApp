package com.todolist.todolist.repositories;

import com.todolist.todolist.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITaskRepository extends JpaRepository<Task,Long> {
}
