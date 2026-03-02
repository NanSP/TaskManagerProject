package com.example.backend.task;

public record TaskResponseDTO(Integer id, String titulo, String descricao, Boolean concluido, Integer project_id) {

    public TaskResponseDTO(Task task){
        this(task.getId(), task.getTitulo(), task.getDescricao(), task.getConcluido(), task.getProject_id());
    }
}
