package com.example.backend.controller;

import com.example.backend.task.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("tasks")
public class TaskController {

    @GetMapping
    public void getAll(){

        Task task;
    }
}
