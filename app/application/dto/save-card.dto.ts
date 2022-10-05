import { IsEmail, IsNumber, IsNumberString, IsString, Length, Max, Min } from "class-validator";
import { IsCard } from "../decorators/card.decorator";
import { IPayCard } from "../../domain/entities/pay-card.interface";

export class SaveCardDto implements Partial<IPayCard> {
    @IsNumber()
    @IsCard
    cardNumber!: number;

    @IsNumber()
    @Min(100, {message: 'Ingresar un CVV válido.'})
    @Max(9999)
    cvv!: number;
    
    @IsNumberString()
    @Length(1,2, {message: 'Ingresar un Mes de vencimiento válido.'})
    expirationMonth!: string;

    @IsNumberString()
    @Length(1,4, {message: 'Ingresar un Año de vencimiento válido.'})
    expirationYear!: string;

    @IsString()
    @IsEmail()
    @Length(5,100, {message: 'Ingresar un email válido.'})
    email!: string;

    token!: string;
    
    tokenExpirationDate!: Date;
}