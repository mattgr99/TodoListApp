package com.todolist.todolist.controllers;

import com.todolist.todolist.dto.FolderDTO;
import com.todolist.todolist.dto.ResponseDTO;
import com.todolist.todolist.dto.TaskDTO;
import com.todolist.todolist.models.Folder;
import com.todolist.todolist.models.Task;
import com.todolist.todolist.services.implementations.FolderService;
import com.todolist.todolist.services.implementations.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/task")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;
    private final FolderService folderService;

    @GetMapping("")
    public ResponseDTO findAll(){
        ResponseDTO response = new ResponseDTO();
        List<Task> tasks = taskService.findAll();
        TaskDTO taskDto = new TaskDTO();
        List<TaskDTO> taskDTOS = new ArrayList<>();

        if (tasks.isEmpty()) {
            response.setError(HttpStatus.NO_CONTENT.toString());
            response.setMessage("no tasks found");
            response.setCorrectProcess(false);
            response.setData(null);
        }
        else {
            for (Task t: tasks){
                taskDto.setId(t.getId());
                taskDto.setDescription(t.getDescription());
                taskDto.setIsDone(t.getIsDone());
                taskDTOS.add(taskDto);
                taskDto = new TaskDTO();
            }
            response.setError(null);
            response.setMessage(HttpStatus.OK.toString());
            response.setCorrectProcess(true);
            response.setData(taskDTOS);
        }
        return response;
    }



    @DeleteMapping("{id}")
    public ResponseDTO deleteTask(@PathVariable(value="id") Long id) {
        ResponseDTO response = new ResponseDTO();
        try{
            boolean isdeleted = taskService.delete(id);
            response.setError(null);
            response.setMessage("Delete Task");
            response.setCorrectProcess(true);
            response.setData(isdeleted);

            return response;

        }catch (Exception e){
            response.setError(HttpStatus.INTERNAL_SERVER_ERROR.toString());
            response.setMessage("An exception has occurred");
            response.setCorrectProcess(false);
            response.setData(e);
            return response;
        }
    }

    @PutMapping("{id}")
    public ResponseDTO saveTasksFolder(@PathVariable(value="id") Long id,
                                  @RequestBody Task task) {
        ResponseDTO response = new ResponseDTO();
        try{
            Folder folder = folderService.get(id);
            task.setFolder(folder);
            taskService.save(task);
            response.setError(null);
            response.setMessage("Add Task");
            response.setCorrectProcess(true);
            response.setData(task);
            return response;

        }catch (Exception e){
            response.setError(HttpStatus.INTERNAL_SERVER_ERROR.toString());
            response.setMessage("An exception has occurred");
            response.setCorrectProcess(false);
            response.setData(e);
            return response;
        }
    }
}
