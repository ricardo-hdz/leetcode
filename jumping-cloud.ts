export function jumpingClouds(c: Array<number>) {
    if (!c || c.length < 1) {
        return c.length;
    }
    if (c.length === 2) {
        return 1;
    }
    let numberOnes = c.filter(v => v).length;
    let numberZeroes = c.length - numberOnes;

    if ((numberZeroes - numberOnes) === 1) {
        return numberOnes;
    } else {
        let roundUp = false;
        if (numberOnes <= 1) {
            roundUp = true;
        } else {
            roundUp = ((numberOnes % 2) === 1) ? true : false;
        }
        if ((c.length % 2) === 0) {
        // if ((numberZeroes % 2) === 0) {
            numberZeroes = numberZeroes - 1;
        }

        let jumpZeros = roundUp ?
        Math.ceil((numberZeroes)/2) :
        Math.floor((numberZeroes)/2);

        return numberOnes + jumpZeros;
    }
}