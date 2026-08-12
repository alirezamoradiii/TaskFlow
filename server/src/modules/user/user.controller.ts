import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import UserService from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller()
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-up')
  public signUp(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
