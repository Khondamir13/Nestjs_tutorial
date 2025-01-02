import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [QuizModule],
})
export class AppModule {}
