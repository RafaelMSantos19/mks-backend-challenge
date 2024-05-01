import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT), 
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_DATABASE, 
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    UsersModule,
    MoviesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
