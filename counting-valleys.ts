export function countingValleys(n: number, s: string) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return s === 'D' ? -1 : 1;
    }

    let path = s.split('');
    let steps = [];
    let current;
    let currentPath;

    let valleys = 0;
    let route = 0;
    let flag = 'S';
    
    while (path.length > 0) {
        current = path[0];

        let nextLetter = current === 'U' ? 'D' : 'U';
        let i = path.indexOf(nextLetter);
        if (i !== -1) {
            path = path.slice(i);
            currentPath = path.slice(0, i);
        } else {
            currentPath = path.slice(0);
            path = [];
        }
        let numberSteps = current === 'U' ? (currentPath.length * 1) : (currentPath.length * -1);
        route = route + numberSteps;
        if (route < 0) {
            if (flag !== 'D') {
                valleys++;
                flag = 'D';
            }
        } else {
            flag = 'S';
        }
    }
    return valleys;
}