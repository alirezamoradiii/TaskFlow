import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../configs/app.config';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV ? `${ENV}.env` : '.env',
      load: [appConfig]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
