import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiBody } from "@nestjs/swagger";
import { TExtraCrudService } from "../service";
import { ExtraCrudOptions } from "../types/crud-option.type";

export function TExtraCrudController<T>(
    options?: ExtraCrudOptions,
) {
    @Controller()
    @UseInterceptors(/* your interceptors if any */)
    @ApiBearerAuth()
    class ExtraCrudControllerHost {
        constructor(
            public readonly schemaCrudService: TExtraCrudService<T>,
        ) {
        }

        @Get('/list/:parentId')
        async findAll(
            @Param('parentId') parentId: string
        ) {
            return await this.schemaCrudService.findAll(parentId)
        }

        @Get('/:id')
        async findOne(
            @Param('id') id: string
        ) {
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
