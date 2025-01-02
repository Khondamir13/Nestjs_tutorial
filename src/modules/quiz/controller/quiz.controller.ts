import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {

    @Get('/')
    getAllinformation() : string {
        return "There will be all quiz for users"
    }
}
