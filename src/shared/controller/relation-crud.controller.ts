// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Post,
//   UseInterceptors,
// } from '@nestjs/common';
// import { TRelationCrudService } from '../services/relation-crud.service';
// import {
//   AssignSecondForFirstDTO,
//   AssignFirstForSecondDTO,
// } from '../../dtos/relation-crud.dto';
// import { ApiBearerAuth } from '@nestjs/swagger';

// export function TRelationCrudController<T, U, V>() {
//   @Controller()
//   @UseInterceptors(/* your interceptors if any */)
//   @ApiBearerAuth()
//   class TRelationCrudControllerHost {
//     constructor(
//       public readonly schemaCrudService: TRelationCrudService<T, U, V>,
//     ) {}

//     @Get('/given-first/:id')
//     async givenFirst(@Param('id') id: string) {
//       return await this.schemaCrudService.givenFirst(id);
//     }

//     @Get('/given-second/:id')
//     async givenSecond(@Param('id') id: string) {
//       return await this.schemaCrudService.givenSecond(id);
//     }

//     @Post('assign-firsts-for-second')
//     async assignSecond(@Body() itemData: AssignFirstForSecondDTO) {
//       return await this.schemaCrudService.assignFirstsForSecond(
//         itemData.secondId,
//         itemData.firstIds,
//       );
//     }

//     @Post('assign-seconds-for-first')
//     async assignFirst(@Body() itemData: AssignSecondForFirstDTO) {
//       return await this.schemaCrudService.assignSecondsForFirst(
//         itemData.firstId,
//         itemData.secondIds,
//       );
//     }
//   }

//   return TRelationCrudControllerHost;
// }
