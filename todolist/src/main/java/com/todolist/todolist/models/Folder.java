package com.todolist.todolist.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.List;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Folder {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "folder",fetch= FetchType.LAZY)
    private List<Task> taskList;
}
