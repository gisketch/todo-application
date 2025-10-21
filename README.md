# Full Stack Todo List with API

A simple full-stack Todo List application:

- Frontend: React + TypeScript + Vite + TailwindCSS + ShadCN
- Backend: NestJS + TypeORM
- Database: PostgreSQL
- Orchestration: Docker Compose

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

## Architecture

- `frontend/` (Vite React app)
- `backend/` (NestJS API)
- `postgres` (official Docker image managed via docker-compose)

Services are connected via a bridge network. The API exposes REST endpoints under `/todos`, and the frontend consumes the API at `http://localhost:3000`.

PS. In a production build, I wouldn't expose .env in the repo.
