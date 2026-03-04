package com.example.backend.project;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Table(name = "project")
@Entity(name = "project")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Project {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String descricao;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime created_at;

    @PrePersist
    protected void onCreate() {
        created_at = LocalDateTime.now();
    }

    public Project(ProjectRequestDTO data){
        this.nome = data.nome();
        this.descricao = data.descricao();
        this.created_at = data.created_at();
    }
}
