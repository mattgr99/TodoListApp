package com.todolist.todolist.services.implementations;

import com.todolist.todolist.models.Folder;
import com.todolist.todolist.repositories.IFolderRepository;
import com.todolist.todolist.services.IFolderService;
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
public class FolderService implements IFolderService {

    private final IFolderRepository folderRepository;

    @Override
    public Folder save(Folder folder) {
        folderRepository.save(folder);
        return folder;
    }

    @Override
    public Folder get(Long id) {
        return folderRepository.findById(id).get();
    }

    @Override
    public Boolean delete(Long id) {
        folderRepository.deleteById(id);
        return TRUE;
    }

    @Override
    public List<Folder> findAll() {
        return (List<Folder>) folderRepository.findAll();
    }
}
