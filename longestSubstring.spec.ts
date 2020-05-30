import { lengthOfLongestSubstring } from './longestSubstring';

describe('longest substring', () => {
    let inputs = [
        "cdd",
        "pwwkew",
        "dvdf",
        " ",
        "aab",
        "bbbbb",
        "abcabcbb"
    ];
    let expected = [
        // [2, 'cd'],
        // [3, 'kew'],
        // [3, 'vdf'],
        // [1, ' '],
        // [2, 'ab'],
        // [1, 'b']
        'cd',
        'kew',
        'vdf',
        ' ',
        'ab',
        'b',
        'abc'
    ];

    inputs.forEach((word, i) => {
        it(`should return correct answer for word ${ word }`, () => {
            expect(lengthOfLongestSubstring(word)).toEqual(expected[i]);
        }); 
    });
});

// pwwkew
// 012345