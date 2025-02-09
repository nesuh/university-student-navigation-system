import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../service/auth.service';
import { CreateLoginDto, CreateUserDto } from '../dtos';
import { AllowAnonymous } from 'src/shared/authorization';

@Controller('auth')
@AllowAnonymous()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  @Post('signup')
async signup(@Body() user: CreateUserDto) {
  return this.authService.signUp(user);
 } 

 @Post('login')
 async login(@Body() user: CreateLoginDto) {
  return this.authService.login(user);
 }

}
