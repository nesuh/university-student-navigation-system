import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IAMModule } from './module/iam/iam.module';
import { SNSModule } from './module/sns/sns.module';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { AuthorizationModule } from './shared/authorization';
import { ConfigModule } from '@nestjs/config';
import { DataSeeder } from './shared/seeders/data.seeder';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }
    ),
    AuthorizationModule,
    IAMModule,
    SNSModule,
  ],
  controllers: [],
  providers: [
    DataSeeder,
  ],
})
export class AppModule {}
