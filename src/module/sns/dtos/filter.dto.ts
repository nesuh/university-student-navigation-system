import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsObject, IsString, IsNumber } from 'class-validator';
export class FilterQueryDto {
  @IsOptional()
  @IsObject()
  filter?: Record<string, any>;

  @IsOptional()
  @IsString()
  sort?: string;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}
export class FilterDto {
  @ApiProperty({description:'Category of the building'})
  // @IsOptional()
  @IsString()
  category: 'Building' | 'Lab' | 'Office' | 'Dormitory' | 'Cafeteria' | 'Classroom' | 'Registration' | 'College' | 'Department' | 'Library';

  @ApiProperty({description:'Building Name'})
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({description:'Building Block'})
  @IsOptional()
  @IsNumber()
  block?:number

  // @IsOptional()
  // @IsString()
  // status?: string;

  // Add more filters as needed
}
export class FilterByCatagoryDto {
  @IsOptional()
  @IsString()
  CatagoryName?: string;

}