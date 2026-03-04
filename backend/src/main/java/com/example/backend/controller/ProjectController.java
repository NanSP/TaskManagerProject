package com.example.backend.controller;

import com.example.backend.project.Project;
import com.example.backend.project.ProjectRepository;
import com.example.backend.project.ProjectRequestDTO;
import com.example.backend.project.ProjectResponseDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    public ResponseEntity<?> getById(@PathVariable(value = "id") Integer id){

        Optional<Project> project = repository.findById(id);
        if(project.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Projeto não encontrado");
        }
        ProjectResponseDTO projectDTO = new ProjectResponseDTO(project.get());
        return  ResponseEntity.ok(projectDTO);
    }

    @PostMapping
    public void saveProject(@RequestBody ProjectRequestDTO data){

        Project projectData = new Project(data);
        repository.save(projectData);
        return;
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProject(@PathVariable(value = "id") Integer id, @RequestBody ProjectRequestDTO upData){

        Optional<Project> project = repository.findById(id);
        if(project.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Projeto com ID" + "não encontrado");
        }

        Project projectModel = project.get();
        BeanUtils.copyProperties(upData, projectModel);
        return  ResponseEntity.status(HttpStatus.OK).body(repository.save(projectModel));
    }

    @DeleteMapping("/{id}")
    public void deleteProject(){

    }
}
