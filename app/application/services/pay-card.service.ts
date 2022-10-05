import { MongoRepository, DataSource } from 'typeorm';
import { PayCard } from '../../domain/entities/pay-card.entity';
import { inject } from 'inversify'
import { SaveCardDto } from '../dto/save-card.dto';
import { Response } from '../interfaces/response.interface';

export class PayCardService {
    constructor(@inject(MongoRepository<PayCard>) private repository: MongoRepository<PayCard>) { }
    
    async get(token: string) : Promise<Response<PayCard|undefined|null>> {
        const payCard = await this.repository.findOneBy({token: token});
        return {
            status: 200,
            data: payCard,
            message: 'Data Card received.'
        };
    }

    async save(saveCardDto: SaveCardDto) : Promise<Response<any>> {
        const payCard = await this.repository.save(saveCardDto);
        return {
            status: 201,
            data: payCard,
            message: 'Card Saved.'
        };
    }
}
