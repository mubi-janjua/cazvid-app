import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard())
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post('/post')
  create(@Body() createTodoDto: CreateTodoDto)  {
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
  //
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    console.log(updateTodoDto);
    console.log(id)
    return this.todoService.update(id, updateTodoDto);
  }
  //
  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(id);
    return this.todoService.remove(id);
  }
}