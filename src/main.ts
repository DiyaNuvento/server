import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  const config = new DocumentBuilder()
    .setTitle('A Simple Node JS Server')
    .setDescription('Contains 6 assignments')
    .setVersion('1.0')
    .addTag('Nest')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //setting swagger end point at localhost:3000/api
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
