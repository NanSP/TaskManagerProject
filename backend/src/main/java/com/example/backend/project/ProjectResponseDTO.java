package com.example.backend.project;

import java.time.LocalDateTime;

public record ProjectResponseDTO(Integer id, String nome, String descricao, LocalDateTime created_at) {

    public ProjectResponseDTO(Project project){
        this(project.getId(), project.getNome(), project.getDescricao(), project.getCreated_at());
    }
}
