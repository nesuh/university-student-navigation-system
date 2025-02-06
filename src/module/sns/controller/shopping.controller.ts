import { Controller } from '@nestjs/common';
import { CreateShoppingDto, UpdateShoppingDto } from '../dtos';
import { ApiTags } from '@nestjs/swagger';
import { ExtraCrudOptions } from 'src/shared/types/crud-option.type';
import { TEntityCrudController } from 'src/shared/controller';
import { Shopping } from 'src/db/entities';
import { ShoppingService } from '../service/shopping.service';

const options: ExtraCrudOptions = {
  createDto: CreateShoppingDto,
  updateDto: UpdateShoppingDto,
};

@Controller('shopping')
@ApiTags('Shopping')
export class ShoppingController extends TEntityCrudController<Shopping>(
  options,
) {
  constructor(private readonly ShoppingService: ShoppingService) {
    super(ShoppingService);
  }
}
