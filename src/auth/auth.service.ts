import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt'
import { JwtPayload } from '../jwt/jwt.interface'
import * as redis from 'redis';

@Injectable()
export class AuthService {

    private readonly redisClient;

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){
      this.redisClient = redis.createClient({
          socket:{
            host: 'localhost',
            port: 6379
          }
      });
      this.redisClient.connect();
    }

    async validateUser(email: string, password: string): Promise<any> {

        const user = await this.usersService.findByEmail(email);

        if (password === user.password) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

    async login(user: any) {
        const payload: JwtPayload = { email: user.email, sub: user.userId };
        const token = this.jwtService.sign(payload)
        await this.redisClient.set('token',token);
        await this.redisClient.expire('token', 3600);
        return {
          token: token,
        };
      }

}
