import { repeatedString } from './repeated-string';

describe('Repeated String', () => {
    it('should return correct number of a`s', () => {
        expect(repeatedString('aba', 10)).toEqual(7);
    });
});