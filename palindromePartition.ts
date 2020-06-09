export function palindromePartition(s: string) {
    // slice s in two
    // if parts > 2, recursively find number of cuts
    // if (s.length < 2) {
    //     return 0;
    // }
    // if (s.length === 2) {
    //     return s[0] === s[1] ? 0 : 1;
    // }
    if (!s.length) {
        return 0;
    }

    let sArray = s.split('');
    let reverseArray = s.split('').reverse();
    let reverse = reverseArray.join('');

    if (s === reverse) {
        return 0;
    }

    let temp = [];
    let breaks = 0;

    while (sArray.length) {
        let current = sArray.shift();
        temp.push(current);
        let s = temp.join('');
        if (reverse.indexOf(s) !== -1) {
            continue;
        } else {
            breaks++;
            let r = sArray.join('');
            if (reverse.indexOf(r) !== -1) {
                return breaks;
            } else {
                temp = [current];
            }   
        }
    }

    return breaks;
}