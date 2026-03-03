# Task Manager Project

Este repositório serve como um ambiente de aprendizado para tecnologias modernas de desenvolvimento web, integrando um backend em Java/Spring Boot com um frontend em React/TypeScript.

## 🧱 Estrutura do Projeto

- `backend/`: aplicação Spring Boot
  - API REST com JPA/Hibernate e PostgreSQL
  - Flyway para migrações de banco de dados
  - Endpoint principal: `/tasks` (POST e GET)

- `frontend/`: aplicação React usando Vite
  - TypeScript + React Query + Axios para consumir a API
  - Componentes para listar e criar tarefas
  - Modal de criação com formulário simples

## ⚙️ Tecnologias Utilizadas

| Camada | Tecnologias | Observações |
|--------|-------------|-------------|
| Backend | Java 21, Spring Boot, Spring Data JPA, Flyway, PostgreSQL | Projeto Maven configurado para perfil `dev` com conexão local |
| Frontend | React 19, TypeScript, Vite, React Query, Axios | Linters configurados (ESLint), foco em hooks e componentes funcionais |

## 🚀 Executando o Projeto

1. **Banco de dados**: crie um banco PostgreSQL `db_taskmanager` e ajuste as credenciais em `backend/src/main/resources/application-dev.properties`.
2. **Backend**: navegue até `backend/` e execute `./mvnw spring-boot:run` (ou equivalente no Windows).
3. **Frontend**: em `frontend/`, instale dependências (`npm install`) e inicie com `npm run dev`.
4. A interface ficará disponível em `http://localhost:5173` (padrão Vite) e consumo da API em `http://localhost:3000/tasks`.

## ✅ Funcionalidades Atuais

- Listagem de tarefas
- Criação de novas tarefas via modal
- Sincronização automática de dados com React Query

## 🔧 Possíveis Melhorias

1. **Completar CRUD**: adicionar endpoints `PUT/PATCH` e `DELETE`, e correspondente UI.
2. **Validação e tratamento de erros**: implementar validações no backend (`@Valid`) e mensagens amigáveis no frontend.
3. **Gerenciamento de projetos**: criar APIs/Interfaces para lidar com a entidade `project` já presente no banco.
4. **Segurança**: restringir CORS, usar variáveis de ambiente para senhas e adicionar autenticação.
5. **Testes**: incluir testes de unidade e integração no backend e frontend.
6. **UX/UI**: aprimorar o formulário, adicionar filtros/paginação e feedback de carregamento.

## 📚 Propósito

O objetivo deste repositório não é um produto final, mas sim um espaço para experimentar e aprender:
- padrões REST com Spring Boot
- migrações de banco com Flyway
- hooks e gerenciamento de estado em React
- tipagem com TypeScript

