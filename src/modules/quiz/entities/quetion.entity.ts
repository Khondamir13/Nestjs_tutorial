import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("quetions")
export class QuetionEntity extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id: number


    @Column({type:"varchar"})
    quetion:string
}