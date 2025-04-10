import { IsOptional, IsBooleanString, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryTaskDto {
  @ApiPropertyOptional({ example: 'true', description: 'filter by status' })
  @IsOptional()
  @IsBooleanString()
  isDone?: string;

  @ApiPropertyOptional({ example: 'learn', description: 'find by name' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ example: 1 })
  @Type(() => Number)
  @IsOptional()
  page?: number;

  @ApiPropertyOptional({ example: 10 })
  @Type(() => Number)
  @IsOptional()
  limit?: number;
}
