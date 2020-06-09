export function longestConsecutiveSequence(nums: Array<number>) {
    // sort
    // shift from array, increase counter
    // if counter === next item, push to temp
    // if not, store temp as longest, reset temp
    // continue

    let sorted = nums.sort((a, b) => a - b);
    let current = null;
    let temp = [];
    let longest = [];
    console.log(sorted);

    while(sorted.length) {
        current = sorted.shift();
        console.log('current', current);
        console.log('last', temp.length && temp[temp.length - 1] ? temp[temp.length - 1] : null);
        if (temp.indexOf(current) === -1 && (temp === [] || (temp.length && ((temp[temp.length - 1] + 1) === current)))) {
            temp.push(current);
        } else if (temp[temp.length - 1] === current) {
            continue;
        } else {            
            if (temp.length >= longest.length) {
                longest = temp;
            }
            temp = [current];
        }
    }

    if (temp.length >= longest.length) {
        longest = temp;
    }
    console.log(longest);
    return longest.length;
}