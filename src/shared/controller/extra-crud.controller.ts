import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiBody } from "@nestjs/swagger";
import { ExtraCrudOptions } from "../types/crud-option.type";
import { TExtraCrudService } from "../service";
import { ObjectLiteral } from "typeorm";
import { AllowAnonymous } from "../authorization";

export function TExtraCrudController<T extends ObjectLiteral>(
    options?: ExtraCrudOptions,
) {
    @Controller()
    @UseInterceptors(/* your interceptors if any */)
    @ApiBearerAuth()
    class ExtraCrudControllerHost {
        constructor(
            public readonly schemaCrudService: TExtraCrudService<T>) {
        }
        
        @AllowAnonymous()
        @Get('/list/:parentId')
        async findAll(
            @Param('parentId') parentId: string
        ) {
            return await this.schemaCrudService.findAll(parentId)
        }
        @AllowAnonymous()
        @Get('/:id')
        async findOne(
            @Param('id') id: string
        ):Promise<T | undefined> {
            return await this.schemaCrudService.findOne(id)
        }

        @Post()
        @ApiBody({ type: options?.createDto })
        async create(
            @Body() itemData: any
        ) {
            return await this.schemaCrudService.create(itemData)
        }

        @Put('/:id')
        @ApiBody({ type: options?.updateDto })
        async update(
            @Param('id') id: string,
            @Body() itemData: any
        ) {
            return await this.schemaCrudService.update(id, itemData)
        }

        @Delete('/:id')
        async delete(
            @Param('id') id: string
        ) {
            return await this.schemaCrudService.delete(id)
        }
    }
    return ExtraCrudControllerHost
}
