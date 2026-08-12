import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Role } from '../model/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'userName is required' })
  @MaxLength(100, { message: 'userName must be at most 100 characters' })
  'userName': string;

  @IsEmail({}, { message: 'email is not valid' })
  'email': string;

  @IsOptional()
  @IsEnum(Role, { message: 'role is not valid' })
  'role'?: Role;

  @IsString()
  @MinLength(8, { message: "password can't be under 8 characters" })
  @MaxLength(64, { message: "password can't be more than 64 characters" })
  'password': string;
}
