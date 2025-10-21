import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) { }

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const todo = this.todoRepository.create({
            task: createTodoDto.task,
            deadline: createTodoDto.deadline ? new Date(createTodoDto.deadline) : null,
        });
        return await this.todoRepository.save(todo);
    }

    async findAll(): Promise<Todo[]> {
        return await this.todoRepository.find({
            order: { createdAt: 'DESC' },
        });
    }

    async findOne(id: string): Promise<Todo> {
        const todo = await this.todoRepository.findOne({ where: { id } });
        if (!todo) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }
        return todo;
    }

    async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
        const todo = await this.findOne(id);

        // Update fields
        if (updateTodoDto.task !== undefined) {
            todo.task = updateTodoDto.task;
        }
        if (updateTodoDto.deadline !== undefined) {
            todo.deadline = updateTodoDto.deadline ? new Date(updateTodoDto.deadline) : null;
        }
        if (updateTodoDto.isCompleted !== undefined) {
            todo.isCompleted = updateTodoDto.isCompleted;
            todo.completedAt = updateTodoDto.isCompleted ? new Date() : null;
        }

        return await this.todoRepository.save(todo);
    }

    async remove(id: string): Promise<void> {
        const todo = await this.findOne(id);
        await this.todoRepository.remove(todo);
    }

    async toggleComplete(id: string): Promise<Todo> {
        const todo = await this.findOne(id);
        todo.isCompleted = !todo.isCompleted;
        todo.completedAt = todo.isCompleted ? new Date() : null;
        return await this.todoRepository.save(todo);
    }
}
