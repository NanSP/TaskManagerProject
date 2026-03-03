package com.example.backend.task;

public record TaskRequestDTO(String titulo, String descricao, Boolean concluido, Integer project_id) {
}
