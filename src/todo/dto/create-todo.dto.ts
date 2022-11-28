import {IsNotEmpty, IsString, IsUUID} from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    readonly  title: string;

    @IsString()
    readonly details: string;
}