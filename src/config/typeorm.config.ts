import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { QuizEntity } from "src/modules/quiz/entities/quiz.entity";

export const typeOrmConfig : TypeOrmModuleOptions =  { 
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Khondamir_13',
    database: 'quiz',
    entities: [QuizEntity],
    synchronize: true,
}