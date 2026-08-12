import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from '../configs/app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserModule from '../modules/user/user.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV ? `.env.${ENV}.local` : '.env',
      load: [appConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (service: ConfigService) => ({
        type: 'postgres',
        port: +service.get('appConfig.db_port'),
        username: service.get<string>('appConfig.db_user'),
        password: service.get<string>('appConfig.db_password'),
        database: 'taskflow',
        synchronize: ENV === 'development' ? true : false,
        autoLoadEntities: true,
      })
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
