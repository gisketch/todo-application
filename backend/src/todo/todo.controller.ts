import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createTodoDto: CreateTodoDto) {
        return this.todoService.create(createTodoDto);
    }

    @Get()
    findAll() {
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.todoService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
        return this.todoService.update(id, updateTodoDto);
    }

    @Patch(':id/toggle')
    toggleComplete(@Param('id') id: string) {
        return this.todoService.toggleComplete(id);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.todoService.remove(id);
    }
}
