package com.example.backend.task;

import jakarta.persistence.*;

@Table(name = "task")
@Entity(name = "task")
public class Task {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String descricao;
    private Boolean concluido;
    private Integer project_id;
}
