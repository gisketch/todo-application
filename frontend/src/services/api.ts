import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface Todo {
    id: string;
    task: string;
    deadline: string | null;
    isCompleted: boolean;
    completedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface CreateTodoDto {
    task: string;
    deadline?: string;
}

export interface UpdateTodoDto {
    task?: string;
    deadline?: string;
    isCompleted?: boolean;
}

export const todoApi = {
    // Create a new todo
    createTodo: async (data: CreateTodoDto): Promise<Todo> => {
        const response = await api.post<Todo>('/todos', data);
        return response.data;
    },

    // Get all todos
    getAllTodos: async (): Promise<Todo[]> => {
        const response = await api.get<Todo[]>('/todos');
        return response.data;
    },

    // Get a single todo by ID
    getTodoById: async (id: string): Promise<Todo> => {
        const response = await api.get<Todo>(`/todos/${id}`);
        return response.data;
    },

    // Update a todo
    updateTodo: async (id: string, data: UpdateTodoDto): Promise<Todo> => {
        const response = await api.patch<Todo>(`/todos/${id}`, data);
        return response.data;
    },

    // Toggle todo completion status
    toggleTodoComplete: async (id: string): Promise<Todo> => {
        const response = await api.patch<Todo>(`/todos/${id}/toggle`);
        return response.data;
    },

    // Delete a todo
    deleteTodo: async (id: string): Promise<void> => {
        await api.delete(`/todos/${id}`);
    },
};

export default api;
