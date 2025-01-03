import { Injectable } from "@nestjs/common";
import { CreateQuetionDto } from "../dto/quetion.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { QuetionRepository } from "../entities/quetion.repository";
import { QuetionEntity } from "../entities/quetion.entity";


@Injectable()
export class QuetionService { 
    constructor(@InjectRepository(QuetionRepository) private readonly quetionRepository : QuetionRepository){}


     async createQuetion(quetion:CreateQuetionDto) : Promise<QuetionEntity>{
      return await this.quetionRepository.save(quetion)
    }
}