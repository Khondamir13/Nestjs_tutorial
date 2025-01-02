import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {

    getAllQuiz() : string { 
        return "There will be all quiz from server for users"
    }
}
