# Task Manager Project

[![Java](https://img.shields.io/badge/Java-21%2B-blue?style=flat-square&logo=openjdk)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.1%2B-brightgreen?style=flat-square&logo=spring)](https://spring.io/projects/spring-boot)
[![Maven](https://img.shields.io/badge/Maven-3.8%2B-red?style=flat-square&logo=apache%20maven)](https://maven.apache.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14%2B-blue?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4%2B-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React Query](https://img.shields.io/badge/React%20Query-5.90-orange?style=flat-square&logo=tanstack)](https://tanstack.com/query)
[![Axios](https://img.shields.io/badge/Axios-1.13-blue?style=flat-square&logo=axios)](https://axios-http.com/)

Este repositório serve como um ambiente de aprendizado para tecnologias modernas de desenvolvimento web, integrando um backend em Java/Spring Boot com um frontend em React/TypeScript.

## 🧱 Estrutura do Projeto

- `backend/`: aplicação Spring Boot
  - API REST com JPA/Hibernate e PostgreSQL
  - Flyway para migrações de banco de dados
  - Endpoints principais: `/tasks` e `/projects` (CRUD completo)

- `frontend/`: aplicação React usando Vite
  - TypeScript + React Query + Axios para consumir a API
  - Componentes para listar e criar tarefas
  - Modal de criação com formulário simples

## ⚙️ Tecnologias Utilizadas

| Camada   | Tecnologias                                                      | Observações                                                                                                            |
| -------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Backend  | Java 21, Spring Boot, Spring Data JPA, Flyway, PostgreSQL, Maven | Projeto Maven configurado para perfil `dev` com conexão local; aprende-se a estruturar builds e dependências via Maven |
| Frontend | React 19, TypeScript, Vite, React Query, Axios                   | Linters configurados (ESLint), foco em hooks e componentes funcionais                                                  |

## 🚀 Executando o Projeto

1. **Banco de dados**: crie um banco PostgreSQL `db_taskmanager` (PostgreSQL 14+); as migrações de esquema e dados ficam em `backend/src/main/resources/db/migration/` e as credenciais são ajustadas em `backend/src/main/resources/application-dev.properties`.
2. **Backend**: navegue até `backend/` e execute `./mvnw spring-boot:run` (ou equivalente no Windows).
3. **Frontend**: em `frontend/`, instale dependências (`npm install`) e inicie com `npm run dev`.
4. A interface ficará disponível em `http://localhost:5173` (padrão Vite) e consumo da API em `http://localhost:3000` (verifique a constante `API_URL` nos hooks do frontend).

> **Dica:** se preferir configurar outro endereço, uma variável `REACT_APP_API_URL` pode ser usada no `.env` e nos hooks.

## 📡 Endpoints REST

```bash
# listar tarefas
curl http://localhost:3000/tasks

# criar tarefa
curl -X POST http://localhost:3000/tasks \
  -H 'Content-Type: application/json' \
  -d '{"titulo":"comprar leite","descricao":"supermercado","concluida":false}'

# atualizar
curl -X PUT http://localhost:3000/tasks/1 -d '{"titulo":"..."}' -H 'Content-Type: application/json'

# excluir
curl -X DELETE http://localhost:3000/tasks/1
```

Os mesmos verbos (GET/POST/PUT/DELETE) também existem em `/projects`.

## ✅ Funcionalidades Atuais

- **Tasks**
  - Listagem de todas as tarefas
  - Criação de novas tarefas via modal
  - Atualização e exclusão de tarefas (API já disponível)
  - Sincronização automática de dados com React Query

- **Projects**
  - Listagem de projetos existentes
  - Criação, edição e exclusão de projetos através da API

O backend expõe endpoints REST completos para `tasks` e `projects`, permitindo um CRUD total; o frontend consome atualmente apenas parte dessas rotas.

## 🔧 Possíveis Melhorias

O backend já oferece CRUD completo para **tasks** e **projects** (GET/POST/PUT/DELETE), portanto o frontend pode ser atualizado para consumir todas essas rotas. Com base na análise da pasta `backend/`, outras oportunidades de evolução incluem:

1. **Arquitetura e manutenção do backend**
   - Introduzir uma camada de _service_ para separar lógica de negócio dos controllers.
   - Utilizar relacionamentos JPA (`@ManyToOne`/`@OneToMany`) entre `Task` e `Project` em vez de um campo `project_id` simples.
   - Empregar mapeadores dedicados (`MapStruct` ou similar) em vez de `BeanUtils.copyProperties`.
   - Adicionar campos de auditoria (`created_at`, `updated_at`, etc.) e considerar UUIDs ou enums para status.
   - Melhorar as migrações Flyway (schema e dados de seed) com mais casos de teste.

2. **Validação e tratamento de erros**
   - Anotar DTOs com `@Valid`, `@NotNull`, `@Size` e retornar mensagens padronizadas.
   - Implementar um `@ControllerAdvice` global para capturar exceções e definir respostas JSON consistentes.

3. **Segurança & configuração**
   - Configurar CORS de forma granular ou via propriedades com perfis Spring (`dev`/`prod`).
   - Externalizar credenciais e URLs em variáveis de ambiente ou `application-*.yml`.
   - Adicionar autenticação/autorização (JWT, OAuth2, basic auth) e possivelmente usuários/roles.
   - Preparar perfis de produção com logs e monitoramento.

4. **Testes e qualidade**
   - Criar testes unitários para repositórios, serviços e controllers.
   - Escrever testes de integração (`@SpringBootTest`) com banco de dados em memória (H2).
   - Configurar análise estática (SpotBugs, SonarLint) e linters para Java.

5. **Documentação & Deploy**
   - Incluir OpenAPI/Swagger para documentação automática da API.
   - Dockerizar o backend e incluir `docker-compose` com PostgreSQL.
   - Adicionar pipelines CI/CD (ex.: GitHub Actions) para build/test/deploy.

6. **Frontend**
   - Consumir endpoints de **projetos** e oferecer CRUD completo na UI.
   - Implementar filtros, paginação, estados de carregamento e feedback de erro.
   - Validar formulários e informar o usuário sobre campos obrigatórios.

7. **Outras melhorias gerais**
   - Melhorar logging, adicionar endpoints de health/readiness e métricas.
   - Internacionalização (i18n) e acessibilidade (a11y) na interface.
   - Otimizações de desempenho, caching e índices no banco de dados.

Essas sugestões surgem após examinar os códigos em `backend/src/main/java` e servem como roadmap para evoluir a aplicação além do estado atual de aprendizado.

## 📚 Propósito

O objetivo deste repositório não é um produto final, mas sim um espaço para experimentar e aprender:

- padrões REST com Spring Boot
- migrações de banco com Flyway
- hooks e gerenciamento de estado em React
- tipagem com TypeScript
