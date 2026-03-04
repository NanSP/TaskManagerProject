package com.example.backend.controller;

import com.example.backend.project.ProjectRepository;
import com.example.backend.project.ProjectResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("projects")
public class ProjectController {

    @Autowired
    private ProjectRepository repository;

    @GetMapping
    public List<ProjectResponseDTO> getAll(){

        List<ProjectResponseDTO> projectList = repository.findAll().stream().map(ProjectResponseDTO::new).toList();
        return projectList;
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
