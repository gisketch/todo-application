import { IsNotEmpty, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    task: string;

    @IsOptional()
    @IsDateString()
    deadline?: string;
}
