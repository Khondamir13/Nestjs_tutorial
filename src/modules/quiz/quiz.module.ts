import { Module } from '@nestjs/common';
import { QuizController } from './controller/quiz.controller';
import { QuizService } from './service/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './entities/quiz.repository';
import { QuetionController } from './controller/quetion.controller';
import { QuetionService } from './service/quetion.service';
import { QuetionRepository } from './entities/quetion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuizRepository, QuetionRepository])],
  controllers: [QuizController,QuetionController],
  providers: [QuizService, QuetionService]
})
export class QuizModule {}
