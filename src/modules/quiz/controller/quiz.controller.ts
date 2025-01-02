import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../service/quiz.service';
import { CreateQuizDTO } from '../dto/quiz.dto';

@Controller('quiz')
export class QuizController {

    constructor(private readonly quizService: QuizService){}

    @Get('/')
    getAllQuiz() : string {
        return this.quizService.getAllQuiz()
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData:CreateQuizDTO){
        return quizData
    }
}
   