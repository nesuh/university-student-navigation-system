// TypeOrmService to provide configuration
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SeederOptions } from 'typeorm-extension';
import { typeormConfig } from './typeorm-config-helper';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions & SeederOptions {
    return typeormConfig;
  }
}
