import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IAMModule, } from './module/iam/iam.module';
import { SNSModule } from './module/sns/sns.module';
import { TypeOrmConfigService } from 'yegara';
@Module({
  imports:[
  TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  IAMModule,
  SNSModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
