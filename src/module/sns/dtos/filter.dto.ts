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
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  status?: string;

  // Add more filters as needed
}