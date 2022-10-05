import { DataSource } from 'typeorm';
import { PayCard } from '../domain/entities/pay-card.entity';

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "tokenize",
    port: 27017,
    synchronize: true,
    logging: ['query', 'error'],
    entities: [PayCard],
    migrations: [],
    subscribers: [],
});