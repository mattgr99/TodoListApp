package com.todolist.todolist.services;

import com.todolist.todolist.models.Folder;

import java.util.List;

public interface IFolderService {
    Folder save(Folder folder);
    Folder get(Long id);
    Boolean delete(Long id);
    List<Folder> findAll();

}
