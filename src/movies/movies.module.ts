import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './movies.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtMiddleware } from '../jwt/jwt.middleware';
import { jwtService } from 'src/jwt/jwt.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Movies])
  ],
  controllers: [MoviesController],
  providers: [MoviesService, JwtService, jwtService]
})
export class MoviesModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(JwtMiddleware)
          .forRoutes('movies')
    }
}
