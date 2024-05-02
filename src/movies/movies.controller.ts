import { Body, Controller, Get, Post, HttpException, HttpStatus, Res, Headers } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Response } from 'express';
import { MovieDomain } from './movies.domain';

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly moviesService: MoviesService
    ){}

    @Get()
    async findAllMovies(@Headers('authtoken') authtoken:string, @Res() response: Response){
        const movies = await this.moviesService.findAllMovies()

        if(movies.length === 0 ) throw new HttpException('Movies not found!', HttpStatus.NOT_FOUND);
    
        return response.status(200).json(movies)
    }

    @Post()
    async createMovie(@Headers('authtoken') authtoken:string, @Res() response: Response, @Body() movie: MovieDomain){
        const movieCreated = await this.moviesService.createMovies(movie);
        return response.status(201).json(movieCreated);
    }
}
