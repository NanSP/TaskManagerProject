package com.example.backend.project;

import com.example.backend.task.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
