CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS task(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(20) NOT NULL,
    descricao TEXT,
    concluido BOOLEAN DEFAULT FALSE,
    project_id INTEGER NOT NULL,
    FOREIGN KEY (project_id) REFERENCES project(id)
);



