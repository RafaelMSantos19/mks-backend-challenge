import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { UserDomain } from './user.domain';


@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}

    @Get()
    async findAllUsers(@Res() response: Response){
        const users = await this.usersService.findAllUsers()

        if(users.length === 0) throw new HttpException('Users not found!', HttpStatus.NOT_FOUND);

        return response.status(200).json(users)
    }

    @Post()
    async createUser(@Res() response: Response,@Body() user: UserDomain){
        const userCreated = await this.usersService.createUser(user);
        return response.status(201).json(userCreated);
    }
}
