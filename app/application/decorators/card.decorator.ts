import luhn from 'luhn';

export function IsCard(target: Object, propertyKey: string) {
    if (!luhn.validate(target.toString())) throw new Error('El número de tarjeta es inválido.');
}
