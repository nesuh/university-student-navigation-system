import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/db/entities';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { AuthorizationModule } from 'src/shared/authorization';

@Module({
  imports: [TypeOrmModule.forFeature([Users]),
  AuthorizationModule,
],
  controllers: [AuthController],
  providers: [AuthService],
})
export class IAMModule {}
