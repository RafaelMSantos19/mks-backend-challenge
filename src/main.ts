import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)
  await app.listen(process.env.PORT);
  console.log("Aplication running in port: "+ process.env.PORT)
}
bootstrap();
