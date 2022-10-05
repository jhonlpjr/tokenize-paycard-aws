import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm"; 
import { IPayCard } from "./pay-card.interface";

@Entity()
export class PayCard implements IPayCard{
    @Column()
    cardNumber: number;
    @Column()
    cvv: number;
    @Column()
    expirationMonth: string;
    @Column()
    expirationYear: string;
    @Column()
    email: string;
    @Column()
    token: string;
    @Column()
    tokenExpirationDate: Date;

    constructor(
        cardNumber: number,
        cvv: number,
        expirationMonth: string,
        expirationYear: string,
        email: string,
        token: string,
        tokenExpirationDate: Date,
    ) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expirationMonth = expirationMonth;
        this.expirationYear = expirationYear;
        this.email = email;
        this.token = token;
        this.tokenExpirationDate = tokenExpirationDate;
    }
}

