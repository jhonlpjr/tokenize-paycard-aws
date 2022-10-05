import { Response } from "../application/interfaces/response.interface";
import { PayCard } from "../domain/entities/pay-card.entity";
import { AppDataSource } from "../utils/config";
import { DataSource, MongoRepository, getMongoRepository } from 'typeorm'
import { PayCardService } from "../application/services/pay-card.service";

const data : DataSource = AppDataSource;
const repository = getMongoRepository(PayCard);
const service = new PayCardService(repository);

export async function get(event: string) : Promise<Response<PayCard|undefined|null>> {
    return await service.get(event);
}

export async function save(event: PayCard) : Promise<Response<any>> {
    return await service.save(event);
}
