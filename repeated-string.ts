export function repeatedString(s: string, n: number) {
    let times = 0;
    let remaining;

    let numberLetters;
    let subsetLetters;

    numberLetters = s.split('').filter(v => v === 'a').length;

    if (n >= s.length) {    
        times = Math.floor(n/s.length);
        remaining = n % s.length;
        subsetLetters = s.substring(0, remaining).split('').filter(v => v === 'a').length;
    } else {
        times = 0;
        subsetLetters = s.substring(0, n).split('').filter(v => v === 'a').length;
    }

    return (numberLetters * times) + subsetLetters;
}