export function sockMerchant(n: number, ar: Array<number>) {
    let result = 0;
    if (n !== ar.length || ar.length === 0) {
        return 0;
    }

    let sorted = ar.sort((a, b) => { return a-b; });
    let current;
    let pair;
    let totalPairs = 0;
    console.log(sorted);
    while (sorted.length > 0) {

        current = sorted.shift();
        console.log('current', current);
        pair = sorted.indexOf(current);
        console.log('pair', pair);
        if (pair !== -1) {
            sorted.splice(pair, 1);
            totalPairs++;
        }
    }
    return totalPairs;
}