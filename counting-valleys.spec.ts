import { countingValleys } from "./counting-valleys";

describe('Counting Valleys', () => {
    it('should count correct number of steps in valley', () => {
        expect(countingValleys(8,'UDDDUDUU')).toEqual(1);
        expect(countingValleys(8,'UDDDUDUUDDUU')).toEqual(2);
    });
});