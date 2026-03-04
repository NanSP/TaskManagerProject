package com.example.backend.controller;

import com.example.backend.task.Task;
import com.example.backend.task.TaskRepository;
import com.example.backend.task.TaskRequestDTO;
import com.example.backend.task.TaskResponseDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> getById(@PathVariable(value = "id") Integer id) {
        Optional<Task> task = repository.findById(id);
        if (task.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarefa com ID " + id + " não encontrada");
        }
        TaskResponseDTO taskDTO = new TaskResponseDTO(task.get());
        return ResponseEntity.ok(taskDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable(value = "id") Integer id) {
        Optional<Task> task = repository.findById(id);
        if (task.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarefa com ID " + id + " não encontrada");
        }
        repository.delete(task.get());
        return ResponseEntity.status(HttpStatus.OK).body("Task deleted");
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTask(@PathVariable(value = "id") Integer id, @RequestBody TaskRequestDTO upData) {
        Optional<Task> task = repository.findById(id);
        if (task.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarefa com ID " + id + " não encontrada");
        }
        Task taskModel = task.get();
        BeanUtils.copyProperties(upData, taskModel);
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(taskModel));
    }
}
