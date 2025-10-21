# Full Stack Todo List with API

A simple full-stack Todo List application:

- Frontend: React + TypeScript + Vite + TailwindCSS + ShadCN
- Backend: NestJS + TypeORM
- Database: PostgreSQL
- Orchestration: Docker Compose

<img width="610" height="655" alt="image" src="https://github.com/user-attachments/assets/728e7a2e-ad94-4fdc-8b4b-0b128a3dfe7b" />

## Features

- Add a task with an optional deadline
- Toggle completion (saves a timestamp when completed)
- Delete tasks
- Clean UI
- Date picker for setting deadlines
- Toast notifications for success/error
- Sorting:
  - Incomplete first
  - Among incomplete: tasks with deadlines first, then by soonest deadline
  - Without deadlines: newest first
  
## API Endpoints

- `GET /todos` - Get all todos
- `POST /todos` - Create a todo
- `PATCH /todos/:id` - Update a todo
- `PATCH /todos/:id/toggle` - Toggle completion
- `DELETE /todos/:id` - Delete a todo

## Architecture

- `frontend/` (Vite React app)
- `backend/` (NestJS API)
- `postgres` (official Docker image managed via docker-compose)

Services are connected via a bridge network. The API exposes REST endpoints under `/todos`, and the frontend consumes the API at `http://localhost:3000`. Check the built react app at `https://localhost:8000`

## Note

My primary experience is with React/TypeScript on the frontend and Kotlin/Spring Boot and Node.js/Express on the backend. This was my **first time** working with **NestJS**, which I learned through documentation and best practices research specifically for this project.
### The application follows NestJS conventions including:
- Modular architecture with controllers, services, and DTOs
- TypeORM for database operations
- Proper dependency injection
- Docker containerization with multi-stage builds

PS. In a production build, I wouldn't expose .env in the repo.
