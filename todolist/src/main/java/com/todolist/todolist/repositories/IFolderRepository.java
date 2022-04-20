package com.todolist.todolist.repositories;

import com.todolist.todolist.models.Folder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFolderRepository extends JpaRepository<Folder,Long> {
}
