import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { JwtMiddleware } from 'src/jwt/jwt.middleware';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(JwtMiddleware)
      .forRoutes('users')
  }
}
