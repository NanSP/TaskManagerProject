package com.example.backend.controller;

import com.example.backend.task.Task;
import com.example.backend.task.TaskRepository;
import com.example.backend.task.TaskRequestDTO;
import com.example.backend.task.TaskResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("tasks")
public class TaskController {

    @Autowired
    private TaskRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveTask(@RequestBody TaskRequestDTO data){

        Task taskData = new Task(data);
        repository.save(taskData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<TaskResponseDTO> getAll(){

        List<TaskResponseDTO> taskList = repository.findAll().stream().map(TaskResponseDTO::new).toList();
        return taskList;
    }

    @GetMapping("/{id}")
    public List<TaskResponseDTO> getById(@PathVariable(value = "id") Integer id){
        List<TaskResponseDTO> taskListID = repository.findById(id).stream().map(TaskResponseDTO::new).toList();
        return  taskListID;
    }
}
