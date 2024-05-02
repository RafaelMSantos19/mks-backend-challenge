import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { Users } from '../users/users.entity';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, 
      signOptions: { expiresIn: '1h' }, 
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [AuthService, UsersService, ],
})
export class JwtModules {}
