import { longestConsecutiveSequence } from './longestConsecutiveSequence';
 describe('Longest Consecutive Sequence', () => {
     it('should return correct length of sequence', () => {
         expect(longestConsecutiveSequence([100,4,200,1,3,2])).toEqual(4);
         expect(longestConsecutiveSequence([1,2,3,4,5,6,7,8,9,100,4,200,1,3,2])).toEqual(9);
         expect(longestConsecutiveSequence([1,2,1,4,5,6,7,8,9,100,4,200,1,3,2])).toEqual(9);
         expect(longestConsecutiveSequence([101,102,103,104])).toEqual(4);
         expect(longestConsecutiveSequence([0,1,2,3])).toEqual(4);
         expect(longestConsecutiveSequence([9,1,4,7,3,-1,0,5,8,-1,6])).toEqual(7);
         expect(longestConsecutiveSequence([7,-9,3,-6,3,5,3,6,-2,-5,8,6,-4,-6,-4,-4,5,-9,2,7,0,0])).toEqual(4);
     });
 });