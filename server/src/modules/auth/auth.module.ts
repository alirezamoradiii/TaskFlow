import { Module } from '@nestjs/common';
import BcryptProvider from './providers/bcrypt.provider';
import { HashingProvider } from './providers/hashing.provider';

@Module({
  providers: [
    {
      provide: HashingProvider,
      useClass: BcryptProvider
    }
  ]
})
export default class AuthModule {}
