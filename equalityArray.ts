export function equalityArray(arr: Array<number>) {
    if (arr.length === 0) {
        return;
    }
    if (arr.length <= 2) {
        return arr.length - 1;
    }
    
    let sort = arr.sort((a,b) => a - b);

    let m = Math.floor(arr.length/2);
    
    let leftSorted = sort.slice(0, m);
    console.log('left', leftSorted);
    let rightSorted = sort.slice(m);
    console.log('right', rightSorted);
    
    let left = filterArray(leftSorted);
    let right = filterArray(rightSorted);

    console.log('left filter', left);
    console.log('right filter', right);

    if (left.length > 2 || right.length > 2) {
        let leftNumbers = equalityArray(left);
        console.log('leftNUmbers', leftNumbers);
        let rightNumbers = equalityArray(right);
        console.log('rightNumbers', rightNumbers);
        return leftNumbers + rightNumbers;
    } else if (left.length === 1 && right.length > 1) {
        let n = left[0];
        if (right.indexOf(n) !== -1) {
            return right.length - 1;
        }
        return rightSorted.length;
    } else if (right.length === 1 && left.length > 1) {
        let n = right[0];
        if (left.indexOf(n) !== -1) {
            return left.length - 1;
        }
        return leftSorted.length;
    } else {
        // both == 1
        let n = right[0];
        if (left.indexOf(n) !== -1) {
            return 0;
        }
        return leftSorted.length;
    }
}

function filterArray(arr: Array<number>) {
    let leftArray = [];
    let leftFilter = arr.filter(v => {
        if (leftArray.indexOf(v) === -1) {
            leftArray.push(v);
            return true;
        }
        return false;
    });
    return leftFilter;
}