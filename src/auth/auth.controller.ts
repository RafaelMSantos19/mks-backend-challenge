import { Controller, Get, Res, Headers, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Get('login')
    async login(@Headers('email') email:string, @Headers('password') password: string, @Res() response): Promise<any>{

        const user = await this.authService.validateUser(email, password);

        if(!user){
            return response.status(HttpStatus.UNAUTHORIZED).json({ message: 'Credenciais inválidas' });
        }

        const token = await this.authService.login(user);

        return response.status(HttpStatus.OK).json(token);
    }

}
