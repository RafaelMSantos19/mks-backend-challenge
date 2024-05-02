import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  const configSwaggr= new DocumentBuilder()
    .setTitle('MKS challenge')
    .setDescription('Essa api foi desenvolvida para o desafio MKS challenge')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, configSwaggr);

  SwaggerModule.setup('doc', app, document)

  app.useGlobalPipes(new ValidationPipe)
  await app.listen(process.env.PORT);
  console.log("Aplication running in port: "+ process.env.PORT)
}
bootstrap();


