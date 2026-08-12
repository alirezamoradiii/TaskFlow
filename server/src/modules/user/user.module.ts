import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserModel from './model/user.entity';
import UserController from './user.controller';
import UserService from './user.service';
import AuthModule from '../auth/auth.module';
import CreateUserProvider from './providers/create-user.provider';

@Module({
  controllers: [UserController],
  providers: [UserService, CreateUserProvider],
  imports: [AuthModule, TypeOrmModule.forFeature([UserModel])],
})
export default class UserModule {}
