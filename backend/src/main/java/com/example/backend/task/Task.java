package com.example.backend.task;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "task")
@Entity(name = "task")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Task {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String descricao;
    private Boolean concluido;
    private Integer project_id;

    public Task(TaskRequestDTO data){
        this.titulo = data.titulo();
        this.descricao = data.descricao();
        this.concluido = data.concluido();
        this.project_id = data.project_id();
    }
}
