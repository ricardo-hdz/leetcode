import { palindromePartition } from './palindromePartition';
describe('Palindrome Partition', () => {
    it('should return minimum cuts', () => {
        expect(palindromePartition('aab')).toEqual(1);
        expect(palindromePartition('aabbcc')).toEqual(2);
        expect(palindromePartition('aaccaa')).toEqual(0);
        expect(palindromePartition('efe')).toEqual(0);
        expect(palindromePartition('abbab')).toEqual(1);
        expect(palindromePartition('visas')).toEqual(1);
    });
});
//aab
//baa

//aabbcc
//ccbbaa

//efe
//efe

//abbab
//babba

//visas
//sasiv