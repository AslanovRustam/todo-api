import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Learn Nest.js' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
