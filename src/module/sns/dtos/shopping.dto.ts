import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateShoppingDto {
  @ApiProperty({ description: 'Name of the shopping' })
  @IsNotEmpty()
  @IsString()
  shoppingName: string;

  @ApiProperty({ description: 'Capacity of the shopping' })
  @IsNotEmpty()
  @IsNumber()
  capacity: number;
}

export class UpdateShoppingDto extends CreateShoppingDto {
  @ApiProperty({ description: 'ID of the shopping' })
  @IsNumber()
  id: number;
}
