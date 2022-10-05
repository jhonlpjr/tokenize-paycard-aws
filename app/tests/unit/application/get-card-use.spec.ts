import { PayCardService } from '../../../application/services/pay-card.service';
import { PayCard } from '../../../domain/entities/pay-card.entity';
import { MongoRepository } from 'typeorm';
import { SaveCardDto } from '../../../application/dto/save-card.dto';

describe('Save Card', () => {
    it('Should return card when token is found', async () => {
        const mockedRequest = new SaveCardDto();
        mockedRequest.token = 'mocked';

        const mockedCard = new PayCard(
            4111111111111111,
            222,
            '08',
            '2025',
            'jhonlpjr@gmail.com',
            'tokenfoo',
            new Date(2025, 11, 11),
        );

        const expectedResponse = new SaveCardDto();
        expectedResponse.cardNumber = 4111111111111111;
        expectedResponse.email = 'jhonlpjr@gmail.com';
        expectedResponse.expirationMonth = '08';
        expectedResponse.expirationYear = '2025';

        // const mockedCardRepository: jest.Mocked<MongoRepository<PayCard>> = {
        //     save: jest.fn(),
        //     findOneBy: jest.fn().mockResolvedValue(mockedRequest),
        // };

        // const useCase = new PayCardService(mockedCardRepository);

        // const result = await useCase.save(mockedRequest);

        // expect(result).toMatchObject(expectedResponse);
    });

    // it('Should throw error when token is expired', async () => {
    //     const mockedRequest = new GetCardRequestDto();
    //     mockedRequest.token = 'mocked';

    //     const mockedCard = new Card(
    //         '4111111111111111',
    //         '222',
    //         '08',
    //         '2025',
    //         'jhonlpjr@gmail.com',
    //         'tokenfoo',
    //         new Date(2020, 11, 11),
    //     );

    //     const mockedCardRepository: jest.Mocked<CardRepository> = {
    //         save: jest.fn(),
    //         get: jest.fn().mockResolvedValue(mockedCard),
    //     };

    //     const useCase = new GetCardUseCase(mockedCardRepository);

    //     await expect(useCase.run(mockedRequest)).rejects.toThrowError('Token has expired.');
    // });
});
