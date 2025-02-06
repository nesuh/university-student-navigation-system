import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { TEntityCrudService } from '../service/entity-crud.service';
import { ObjectLiteral } from 'typeorm';

export type TEntityCrudOptions = {
  createDto?: { new (): NonNullable<unknown> };
  updateDto?: { new (): NonNullable<unknown> };
};

export function TEntityCrudController<T extends ObjectLiteral>(
  options?: TEntityCrudOptions,
) {
  @Controller()
  @UseInterceptors(/* your interceptors if any */)
  @ApiBearerAuth()
  class SchemaCrudControllerHost {
    constructor(public readonly schemaCrudService: TEntityCrudService<T>) {}

    @Get()
    async findAll() {
      return await this.schemaCrudService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string): Promise<T | null> {
      return await this.schemaCrudService.findOne(id);
    }

    @Post()
    @ApiBody({ type: options?.createDto })
    async create(@Body() itemData: any) {
      return await this.schemaCrudService.create(itemData);
    }

    @Put('/:id')
    @ApiBody({ type: options?.updateDto })
    async update(@Param('id') id: string, @Body() itemData: any) {
      return await this.schemaCrudService.update(id, itemData);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
      return await this.schemaCrudService.delete(id);
    }
  }
  return SchemaCrudControllerHost;
}
