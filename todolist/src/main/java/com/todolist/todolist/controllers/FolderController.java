package com.todolist.todolist.controllers;

import com.todolist.todolist.dto.FolderDTO;
import com.todolist.todolist.dto.ResponseDTO;
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
@RequestMapping("api/folder")
@RequiredArgsConstructor
public class FolderController {

    private final FolderService folderService;

    @GetMapping("")
    public ResponseDTO findAll(){
        ResponseDTO response = new ResponseDTO();
        List<Folder> folders = folderService.findAll();
        FolderDTO folderDto = new FolderDTO();
        List<FolderDTO> folderDTOS = new ArrayList<>();

        if (folders.isEmpty()) {
            response.setError(HttpStatus.NO_CONTENT.toString());
            response.setMessage("no folders found");
            response.setCorrectProcess(false);
            response.setData(null);
        }
        else {
            for (Folder f: folders){
                folderDto.setId(f.getId());
                folderDto.setName(f.getName());
                folderDto.setTaskList(f.getTaskList());
                folderDTOS.add(folderDto);
                folderDto = new FolderDTO();
            }
            response.setError(null);
            response.setMessage(HttpStatus.OK.toString());
            response.setCorrectProcess(true);
            response.setData(folderDTOS);
        }
        return response;
    }

    @PostMapping("")
    public ResponseDTO saveNewFolder(@RequestBody Folder folder) {
        ResponseDTO response = new ResponseDTO();
        try{
                folderService.save(folder);
                response.setError(null);
                response.setMessage("Save Folder");
                response.setCorrectProcess(true);
                response.setData(folder);

                return response;

        }catch (Exception e){
            response.setError(HttpStatus.INTERNAL_SERVER_ERROR.toString());
            response.setMessage("An exception has occurred");
            response.setCorrectProcess(false);
            response.setData(e);
            return response;
        }
    }

    @PutMapping("")
    public ResponseDTO updateFolder(@RequestBody Folder folder) {
        ResponseDTO response = new ResponseDTO();
        try{
            Folder folderUpdate = folderService.get(folder.getId());
            folderUpdate.setName(folder.getName());
            folderService.save(folderUpdate);
            response.setError(null);
            response.setMessage("Update Folder");
            response.setCorrectProcess(true);
            response.setData(folder);

            return response;

        }catch (Exception e){
            response.setError(HttpStatus.INTERNAL_SERVER_ERROR.toString());
            response.setMessage("An exception has occurred");
            response.setCorrectProcess(false);
            response.setData(e);
            return response;
        }
    }

    @DeleteMapping("{id}")
    public ResponseDTO deleteFolder(@PathVariable(value="id") Long id) {
        ResponseDTO response = new ResponseDTO();
        try{
            boolean isdeleted = folderService.delete(id);
            response.setError(null);
            response.setMessage("Delete Folder");
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




}
