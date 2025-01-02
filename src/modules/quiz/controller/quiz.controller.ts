import { Controller, Get } from '@nestjs/common';
import { QuizService } from '../service/quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private readonly quizService: QuizService){}

    @Get('/')
    getAllQuiz() : string {
        return this.quizService.getAllQuiz()
    }
}
   