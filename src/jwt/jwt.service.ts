import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class jwtService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string): Promise<any> {

    console.log("testando se passa por aqui ")

    try {
      const decoded = this.jwtService.verify(token);
      console.log(decoded)
      return decoded;
    } catch (error) {
      throw new Error('Token inválido');
    }
  }
}
