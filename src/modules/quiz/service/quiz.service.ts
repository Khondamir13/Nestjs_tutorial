import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from '../entities/quiz.repository';
import { CreateQuizDTO } from '../dto/quiz.dto';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(QuizRepository) private readonly quizRepository : QuizRepository){}
    getAllQuiz() : string { 
        return "There will be all quiz from server for users"
    }

    async createNewQuiz(quiz: CreateQuizDTO){
        return await this.quizRepository.save(quiz)
    }
}
