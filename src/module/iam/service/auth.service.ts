import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/db/entities';
import { Repository } from 'typeorm';
import { CreateLoginDto, CreateUserDto } from '../dtos';
import { AuthHelper } from 'src/shared/authorization';
import { UserRole } from 'src/shared/enums';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        private authHelper: AuthHelper,
    ) {}

    async signUp(itemData: CreateUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: { email: itemData.email }
        });

        if (existingUser) {
            throw new BadRequestException('User already exists with this email');
        }

       const hashedPassword = this.authHelper.encodePassword(itemData.password);
        const newUser = this.userRepository.create({
            name:itemData.name,
            role: itemData.role,
            password:hashedPassword ,
            email: itemData.email,
        });
        await this.userRepository.save(newUser);

        const tokenBody = {
            user: { ...newUser ,password: undefined },
        };

        const tokens = await this.authHelper.generateToken(tokenBody);

        console.log('Response Tokens:', tokens); 
      
        return { access_token: tokens.accessToken, refresh_token: tokens.refreshToken };
    }

    async login(itemData: CreateLoginDto) {

        const user = await this.userRepository.findOne({
            where: { email: itemData.email }
        });

        if (!user) {
            throw new BadRequestException('Email or password is incorrect!');
        }

    
        const isPasswordValid = await this.authHelper.compareHashedValue(
            itemData.password,  
            user.password       
        );

        if (!isPasswordValid) {
            throw new BadRequestException('Email or password is incorrect!');
        }

        const tokenBody = {
            user: { id: user.id, name: user.name,  email: user.email, role: user.role},
        }
        const tokens = await this.authHelper.generateToken(user);

        console.log('Response Tokens:', tokens); 
      
        return { access_token: tokens.accessToken, refresh_token: tokens.refreshToken };
        
    }
}
