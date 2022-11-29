import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private collection: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor() {
    this.collection = admin.firestore().collection('users');
  }


  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    await this.collection.doc(user.id).set(user)
    return {};
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    const snapshot = await this.collection.doc(id).get();
    console.log(snapshot.data());
    return snapshot.data();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
