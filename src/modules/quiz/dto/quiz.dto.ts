import { IsNotEmpty, IsString, Length } from "class-validator"

export class CreateQuizDTO{
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    @Length(3,255)
    description:string
}