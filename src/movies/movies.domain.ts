import { IsString, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';

export class MovieDomain {

  @IsString({message: 'name precisa ser uma string'})
  @IsNotEmpty({message: 'name e obrigatoria'})
  readonly name: string;

  @IsNumber({},{message: 'year precisa ser numerico'})
  @IsNotEmpty({message: 'year e obrigatoria'})
  readonly year: number;

  @IsString({message: 'genero precisa ser uma string'})
  @IsNotEmpty({message: 'genero e obrigatoria'})
  readonly genero: string;


  @IsOptional()
  @IsString({message: 'description precisa ser uma string'})
  @IsNotEmpty({message: 'description e obrigatoria'})
  readonly description?: string;

  constructor(name: string, year:number ,genero: string, description?: string, ) {
    this.name = name;
    this.year = year;
    this.genero = genero;
    this.description = description;

  }
}
