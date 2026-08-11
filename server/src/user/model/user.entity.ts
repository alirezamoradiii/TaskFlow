import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity('users')
export default class UserModel {
  @PrimaryGeneratedColumn('uuid')
  'id': string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  'userName': string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  'email': string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  'role': Role;

  @CreateDateColumn()
  'created_at': Date;

  @UpdateDateColumn()
  'updated_at': Date;

  @Column({
    type: 'varchar'
  })
  'password': string;
}
