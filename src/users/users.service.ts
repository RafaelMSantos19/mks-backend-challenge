import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { UserDomain } from './user.domain'
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ) { }

    async findAllUsers(): Promise<Users[]> {
        const users = await this.usersRepository.find()
        return users
    }

    async createUser(user: UserDomain): Promise<Users> {
        const newUser = plainToClass(Users, user);
        const createdUser = await this.usersRepository.save(newUser);
        return createdUser;
    }

    async findByEmail(email: string): Promise<Users | undefined> {
        const user = await this.usersRepository.findOne({ where: { email }  });
        return user;
      }
}
