import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import bcrypt from 'bcrypt';

@Injectable()
export default class BcryptProvider implements HashingProvider {
  public async hashData(data: string | Buffer): Promise<string> {
    return await bcrypt.hash(data, 12);
  }

  public async compareData(
    data: string | Buffer,
    encData: string,
  ): Promise<boolean> {
    return await bcrypt.compare(data, encData);
  }
}
