import { EntityRepository, Repository } from "typeorm";
import { QuetionEntity } from "./quetion.entity";

@EntityRepository(QuetionEntity)
export class QuetionRepository extends Repository<QuetionEntity>{}