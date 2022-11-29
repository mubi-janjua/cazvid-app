import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import {TodoController} from "./todo/todo.controller";
import {TodoService} from "./todo/todo.service";
import { UserModule } from './user/user.module';

@Module({
  imports: [TodoModule, AuthModule, UserModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
