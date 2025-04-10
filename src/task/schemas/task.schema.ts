import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task {
  @ApiProperty({ example: 'Learn Nest.js', description: 'Task name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: false, description: 'Completed flag' })
  @Prop({ default: false })
  isDone: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
