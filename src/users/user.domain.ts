import { IsString, IsEmail, IsDate, IsOptional, MinLength, IsNotEmpty } from 'class-validator';

export class UserDomain {

  @IsString({message: 'name precisa ser uma string'})
  @IsNotEmpty({message: 'name e obrigatoria'})
  readonly name: string;

  @IsString({message: 'password precisa ser uma string'})
  @IsNotEmpty({message: 'password e obrigatoria'})
  @MinLength(6, {message: 'password precisa ter pelo menos 6 caracteres'})
  readonly password: string;

  @IsString({message: 'emial precisa ser uma string'})
  @IsNotEmpty({message: 'email e obrigatoria'})
  @IsEmail({}, {message: 'Formato Invalido para email'})
  readonly email: string;

  @IsOptional()
  @IsDate({message: 'createAt precisa ser uma data'})
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate({message: 'updateAt precisa ser uma data'})
  updatedAt?: Date;

  constructor(name: string, password:string ,email: string, createdAt?: Date, updatedAt?: Date) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
