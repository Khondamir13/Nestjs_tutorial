import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("quizes")
export class QuizEntity{ 
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"varchar"})
    title:string
    
    @Column({type:"text"})
    description: string
}