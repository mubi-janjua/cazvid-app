import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import * as admin from 'firebase-admin';
admin.initializeApp();

@Module({
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
