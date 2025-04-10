import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { QueryTaskDto } from './dto/query-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './schemas/task.schema';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Creating Task' })
  @ApiResponse({
    status: 201,
    description: 'Task is created',
    type: Task,
    isArray: true,
  })
  create(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'All tasks with filters and pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'Array of tasks',
    type: Task,
    isArray: true,
  })
  findAll(@Query() query: QueryTaskDto) {
    return this.taskService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by ID' })
  @ApiResponse({ status: 200, description: 'Task', type: Task })
  @ApiResponse({ status: 404, description: 'Task not find' })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update taks by ID' })
  @ApiResponse({ status: 200, description: 'Updated task', type: Task })
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete task by ID' })
  @ApiResponse({ status: 200, description: 'Task is deleted' })
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
