import { countPinsBFS, countPinsDFS } from './countPins';

describe('Count Pins', () => {
    it('should get correct number of degrees in BFS', () => {
        expect(countPinsBFS(4, 2, [[1,2], [1,3], [4]], 1)).toEqual([0, 1, 1, -1]);
    });

    it('should get correct number of degrees in DFS', () => {
        expect(countPinsDFS(4, 2, [[1,2], [1,3], [4]], 1)).toEqual([1, 1, 0, -1]);
    });
});