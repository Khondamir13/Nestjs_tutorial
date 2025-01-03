import { IsNotEmpty, Length } from "class-validator";


export class CreateQuetionDto { 
    @IsNotEmpty()
    @Length(3,255)
    quetion: string
}