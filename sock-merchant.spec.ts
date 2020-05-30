import { sockMerchant } from './sock-merchant';

describe('Sock Merchant', () => {
    it('should return correct pair of socks', () => {
        let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
        expect(sockMerchant(9,socks)).toEqual(3);
    });

    it('should return correct pair of socks', () => {
        let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
        expect(sockMerchant(9,socks)).toEqual(3);
    });
});