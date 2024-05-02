import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import * as redis from 'redis';
import { config } from 'dotenv';
config();

declare module 'express' {
  interface Request {
    user?: any;
  }
}

@Injectable()
export class JwtMiddleware implements NestMiddleware {

  private readonly redisClient;

  constructor(
    private readonly jwtService: JwtService,    
  ){
    this.redisClient = redis.createClient({
      socket:{
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
      }
    })
    this.redisClient.connect()
  }

  async use(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers['authtoken'];   
    
    if (authHeader) {
      const token = authHeader.slice(7, authHeader.length);
      const validationToken = await this.redisClient.get('token')
      
      if(token === validationToken){
      
        return next();
      }else{
        return res.status(401).json({ message: 'Token inválido' });
      }
    } else {
      return res.status(401).json({ message: 'Token de autenticação não fornecido' });
    }
  }
}
