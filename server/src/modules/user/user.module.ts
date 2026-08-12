import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserModel from './model/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
})
export default class UserModule {}
