import { equalityArray } from './equalityArray';

describe('Equality Array', () => {
    it('should return minimum number of deletations', () => {
        expect(equalityArray([3,3,2,1,3])).toEqual(2);
        expect(equalityArray([3,3,2,1,4,3])).toEqual(3);
        expect(equalityArray([3,3,2,1,4,5,3])).toEqual(4);
        expect(equalityArray([3,3,3,3,3,3,1])).toEqual(1);
        expect(equalityArray([3,3,3,3,3,3,3])).toEqual(0);
        expect(equalityArray([1,1,1,3,3,3])).toEqual(3);
        expect(equalityArray([1,2,3,1,2,3,3,3])).toEqual(4);
    });
});