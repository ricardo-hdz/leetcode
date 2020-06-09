export function reverseInteger(x: number) {
    // 1. check for val truthy
    // 2. check if number < -2(31) and > 2(31)
    // 3. check ofr negative sign
    // 4. reverse
    // 5. return
    
    if (!x || x < (Math.pow(2, 31) * -1) || x > (Math.pow(2, 31) - 1)) {
        return 0;
    }

    let s = x.toString().split('');
    if (s.length) {
        let sign = '';
        if (s[0] === '-') {
            sign = '-';
            s.shift();
        }
        let xx = sign + s.reverse().join('');
        return Number(xx);
    }
    return 0;
}