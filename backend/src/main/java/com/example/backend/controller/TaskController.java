package com.example.backend.controller;

import com.example.backend.task.Task;
import com.example.backend.task.TaskRepository;
import com.example.backend.task.TaskRequestDTO;
import com.example.backend.task.TaskResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tasks")
public class TaskController {

    @Autowired
    private TaskRepository repository;

    @PostMapping
    public void saveTask(@RequestBody TaskRequestDTO data){

        Task taskData = new Task(data);
        repository.save(taskData);
        return;
    }

    @GetMapping
    public List<TaskResponseDTO> getAll(){

        List<TaskResponseDTO> taskList = repository.findAll().stream().map(TaskResponseDTO::new).toList();
        return taskList;
    }
}
