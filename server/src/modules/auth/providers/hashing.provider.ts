import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingProvider {
  abstract hashData(data: string | Buffer): Promise<string>;

  abstract compareData(
    data: string | Buffer,
    encData: string,
  ): Promise<boolean>;
}
