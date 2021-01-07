/**
 * We are given an unsorted array containing ‘n+1’ numbers taken from the
 * range 1 to ‘n’. The array has only one duplicate but it can be repeated
 * multiple times. Find that duplicate number without using any extra space.
 * You are, however, allowed to modify the input array.
 * 
 * Example 1: 
 * Input: [1, 4, 4, 3, 2]
 * Output: 4
 * 
 * Example 2:
 * Input: [2, 1, 3, 3, 5, 4]
 * Output: 3
 * 
 * Example 3:
 * Input: [2, 4, 1, 4, 4]
 * Output: 4
*/

const findTheSingleDupNum = (numsArr) => {
    let i = 0;

    while(i < numsArr.length) {
        let val = numsArr[i],
            isAtRightIndex = val === i + 1,
            isDup = val === numsArr[val - 1];

        if (!isAtRightIndex) {
            if (isDup) return val;
            [numsArr[val - 1], numsArr[i]] = [val, numsArr[val - 1]];
        } else {
            i++
        }
    }

    return null;
};

console.log(findTheSingleDupNum([1, 4, 4, 3, 2])); // => 4
console.log(findTheSingleDupNum([2, 1, 3, 3, 5, 4])); // => 3
console.log(findTheSingleDupNum([2, 4, 1, 4, 4])); // => 4