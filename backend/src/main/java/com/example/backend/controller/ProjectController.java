package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("projects")
public class ProjectController {


    @GetMapping
    public void getALl(){

    }

    @GetMapping("/{id}")
    public void getById(){

    }

    @PostMapping
    public void saveProject(){

    }

    @PutMapping("/{id}")
    public void updateProject(){

    }

    @DeleteMapping("/{id}")
    public void deleteProject(){

    }
}
