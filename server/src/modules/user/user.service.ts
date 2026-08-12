import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import CreateUserProvider from './providers/create-user.provider';

@Injectable()
export default class UserService {
  constructor(private readonly createUserProvider: CreateUserProvider) {}

  public async createUser(data: CreateUserDto) {
    return this.createUserProvider.create(data);
  }
}
