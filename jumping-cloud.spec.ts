import { jumpingClouds } from './jumping-cloud';

describe('Jumping Clouds', () => {
    it('should return correct number of jumps', () => {
       expect(jumpingClouds([0,0,1,0,0,1,0])).toEqual(4);
       expect(jumpingClouds([0,0,0,0,1,0])).toEqual(3);
       expect(jumpingClouds([0,1,0,1,0,0])).toEqual(3);
       expect(jumpingClouds([0,1,0,1,0,1,0])).toEqual(3);
       expect(jumpingClouds([0,0,0,0,0,1,0])).toEqual(4);
       expect(jumpingClouds([0,0,0,0,0,0,0])).toEqual(4);
       expect(jumpingClouds([0,0,0,0,0,0,0])).toEqual(4);
       expect(jumpingClouds([0,0,0,0,0,0,0,0])).toEqual(4);
    });
});