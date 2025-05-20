import { IsOptional, IsInt, IsString, Min, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryParamsDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  page?: number = 1; // Default: page 1

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  limit?: number = 10; // Default: 10 items per page

  @IsOptional()
  @IsString()
  sort?: string; // Example: "createdAt,DESC"

  @IsOptional()
  @IsObject()
  filters?: Record<string, any>; // Example: { status: "active" }
}
