export interface IPayCard {
    cardNumber: number;
    cvv: number;
    expirationMonth: string;
    expirationYear: string;
    email: string;
    token: string;
    tokenExpirationDate: Date;
}