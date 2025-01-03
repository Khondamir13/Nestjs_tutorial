import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuetionDto } from "../dto/quetion.dto";
import { QuetionService } from "../service/quetion.service";
import { QuetionEntity } from "../entities/quetion.entity";

@Controller('quetion')
export class QuetionController { 

    constructor( private readonly quetionService : QuetionService){}
    @Post()
    @UsePipes(ValidationPipe)
    async createQuetion(@Body() quetion : CreateQuetionDto): Promise<QuetionEntity>{
        return await this.quetionService.createQuetion(quetion)
    }
} 