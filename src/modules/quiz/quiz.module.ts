import { Module } from '@nestjs/common';
import { QuizController } from './controller/quiz.controller';
import { QuizService } from './service/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './entities/quiz.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule {}
