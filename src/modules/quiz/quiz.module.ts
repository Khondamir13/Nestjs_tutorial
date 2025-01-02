import { Module } from '@nestjs/common';
import { QuizController } from './controller/quiz.controller';

@Module({
  controllers: [QuizController]
})
export class QuizModule {}
