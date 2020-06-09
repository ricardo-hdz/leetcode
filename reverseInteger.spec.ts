import { reverseInteger } from './reverseInteger';

describe('Reverse Integer', () => {
    it('should return correct int', () => {
        expect(reverseInteger(123)).toEqual(321);
        expect(reverseInteger(-123)).toEqual(-321);
        expect(reverseInteger(120)).toEqual(21);
        expect(reverseInteger(123)).toEqual(321);
        expect(reverseInteger(Math.pow(2,32) + 100)).toEqual(0);
        expect(reverseInteger(Math.pow(2,32) * -2)).toEqual(0);
        expect(reverseInteger(2147483648)).toEqual(0);
    });
});