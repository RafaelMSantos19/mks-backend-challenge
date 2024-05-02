import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies} from './movies.entity';
import { MovieDomain } from './movies.domain';
import { plainToClass } from 'class-transformer';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movies)
        private readonly moviesRepository: Repository<Movies>
    ){ }

    async findAllMovies(): Promise<Movies[]> {
        const movies = await this.moviesRepository.find();
        return movies
    }

    async createMovies(movie: MovieDomain): Promise<Movies>{
        const newMovie = plainToClass(Movies, movie);
        const createdMovie = await this.moviesRepository.save(newMovie);
        return createdMovie;
    }
}
