import { Inject, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import * as admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  private collection: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor() {
    this.collection = admin.firestore().collection('todos');
  }

  async create(createTodoDto: CreateTodoDto) {
    const todo = {
      ...createTodoDto,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    await this.collection.doc(todo.id).set(todo)
  }

  async findAll() {
  const snapshot = await this.collection.get();
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
  }
  //
  async findOne(id: string) {
    const snapshot = await this.collection.doc(id).get();
    return snapshot.data();
  }
  //
  async update(id: string, updateTodoDto: UpdateTodoDto) {
    await this.collection.doc(id).update(updateTodoDto);
  }
  //
  async remove(id: string) {
    await this.collection.doc(id).delete();
    return {}
  }

  // private transformTodo(querySnapshot: DocumentSnapshot<Todo>) {
  //   console.log(querySnapshot.exists);
  //   // if (!querySnapshot.exists) {
  //   //   throw new Error(`no todo found with the given id`);
  //   // }
  //
  //   const todo = querySnapshot.data();
  //   console.log(todo, 'mubeeen');
  //   // const userId = this.request.user.uid;
  //   //
  //   // if (todo.userId !== userId) {
  //   //   throw new Error(`no todo found with the given id`);
  //   // }
  //
  //   return {
  //     id: querySnapshot.id,
  //     ...todo,
  //   };
  // }
}