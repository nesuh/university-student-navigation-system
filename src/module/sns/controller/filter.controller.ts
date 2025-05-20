// import { Body, Controller, Post, Query } from "@nestjs/common";
// import { ApiTags } from "@nestjs/swagger";
// import { AllowAnonymous } from "src/shared/authorization";
// import { FilterService } from "../service/filter.service";
// import { decodeCollectionQuery } from "src/shared/collection-query/decode-query";

// @AllowAnonymous()
// @Controller('filter')
// @ApiTags('Filter')
// export class FilterController{
//     constructor(
//         private readonly filterService: FilterService
//     )
//     {}

//     @Post('serarch-filter')
//     async serarchFilter(
//         @Body() body: any,
//         @Query('q') q: string,
// ) {
//     const query = decodeCollectionQuery(q);
//         return await this.filterService.serarchFilter(body,query);
//     }
// }

import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AllowAnonymous } from 'src/shared/authorization';
import { ApiTags } from '@nestjs/swagger';
import { FilterQueryDto } from '../dtos';
import { FilterService } from '../service/filter.service';


@AllowAnonymous()
@Controller('filter')
@ApiTags('Filter')
export class FilterController {
constructor(
  private readonly filterService:FilterService
){}


  @Get('search-filter')
  @UsePipes(new ValidationPipe({ transform: true })) // Automatically converts types
  async searchFilter(@Query() query: FilterQueryDto) {
    console.log('Received Query:', query); // Debugging

    // Filter, sort, pagination logic
    const { filter, sort, page, limit } = query;

    return {
      message: 'Successfully processed filter request',
      filter,
      sort,
      page,
      limit,
    };

   
  }
}
