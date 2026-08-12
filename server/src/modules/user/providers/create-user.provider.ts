import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashingProvider } from '../../auth/providers/hashing.provider';
import { CreateUserDto } from '../dtos/create-user.dto';
import UserModel from '../model/user.entity';

@Injectable()
export default class CreateUserProvider {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepo: Repository<UserModel>,

    private readonly bcryptProvider: HashingProvider,
  ) {}

  public async create(data: CreateUserDto) {
    let existingUser;

    try {
      existingUser = await this.userRepo.findOne({
        where: {
          email: data.email,
        },
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. please try later',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    if (existingUser) {
      throw new BadRequestException('The user already exists.');
    }

    let newUser = this.userRepo.create({
      ...data,
      password: await this.bcryptProvider.hashData(data.password),
    });

    try {
      newUser = await this.userRepo.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. please try later',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    return newUser;
  }
}
