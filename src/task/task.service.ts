import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { QueryTaskDto } from './dto/query-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(dto: CreateTaskDto) {
    const created = new this.taskModel(dto);
    return created.save();
  }

  async findAll(query: QueryTaskDto) {
    const { isDone, search, page = 1, limit = 10 } = query;
    const filter: any = {};

    if (isDone !== undefined) {
      filter.isDone = isDone === 'true';
    }

    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    const tasks = await this.taskModel
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const total = await this.taskModel.countDocuments(filter);

    return {
      data: tasks,
      page,
      limit,
      total,
    };
  }

  async findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, dto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
