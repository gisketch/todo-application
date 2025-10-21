import { IsOptional, IsString, IsBoolean, IsDateString } from 'class-validator';

export class UpdateTodoDto {
    @IsOptional()
    @IsString()
    task?: string;

    @IsOptional()
    @IsDateString()
    deadline?: string;

    @IsOptional()
    @IsBoolean()
    isCompleted?: boolean;
}
