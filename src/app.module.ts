import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URI ??
        (() => {
          throw new Error('DATABASE_URL is not defined');
        })(),
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
