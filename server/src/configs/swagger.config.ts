import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
  .setTitle('TaskFlow API\s')
  .addServer('http://localhost:3001')
  .addServer('127.0.0.1:3001')
  .build();

  return SwaggerModule.createDocument(app, options);
};

export default swagger;
