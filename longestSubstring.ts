/**
 * @param {string} s
 * @return {number}
 */
export function lengthOfLongestSubstring(s: string) {
    if (s.length <= 1) {
        return s;
    }

    let split = s.split('');
    let temp = [];
    let longest = '';
    let word = s;

    for (var i = 0; i < split.length; i++) {
        if (temp.indexOf(split[i]) === -1) {
            temp.push(split[i]);
        } else {
            let st;

            if (temp.length > word.length) {
                return temp.join('');
            }
            
            if (i > 0 && split[i-1] === split[i] && (i-1) !== 0 && (i+1) < split.length) {
                st = word.substring(i+1);
            } else {
                // concat previous characters and pass along
                let x = word.substring(0, i);
                x = x.replace(split[i], '');
                st = x + word.substring(i);
            }
            
            console.log('substring', st);
            let ss = lengthOfLongestSubstring(st);
            console.log('ss', ss);
            console.log('temp', temp);
            if (temp.join('').length >= ss.length) {
                longest = temp.join('');
            } else {
                longest = ss;
                temp = ss.split('');
            }
            break;
        }
    }

    if (temp.join('').length >= longest.length) {
        longest = temp.join('');
    }

    console.log('longest', longest);
    return longest;
}