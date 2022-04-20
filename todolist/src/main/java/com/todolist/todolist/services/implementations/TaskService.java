package com.todolist.todolist.services.implementations;

import com.todolist.todolist.models.Task;
import com.todolist.todolist.repositories.ITaskRepository;
import com.todolist.todolist.services.ITaskService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

import static java.lang.Boolean.TRUE;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class TaskService implements ITaskService {
    private final ITaskRepository taskRepository;

    @Override
    public Task save(Task task) {
        taskRepository.save(task);
        return task;
    }

    @Override
    public Task get(Long id) {
        return taskRepository.findById(id).get();
    }

    @Override
    public Boolean delete(Long id) {
        taskRepository.deleteById(id);
        return TRUE;
    }

    @Override
    public List<Task> findAll() {
        return (List<Task>) taskRepository.findAll();
    }
}
