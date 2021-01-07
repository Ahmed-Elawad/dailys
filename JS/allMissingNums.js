/**
 * We are given an unsorted array containing numbers taken from
 * the range 1 to ‘n’. The array can have duplicates, which means
 * some numbers will be missing. Find all those missing numbers.
 * 
 * Example 1:
 * Input: [2, 3, 1, 8, 2, 3, 5, 1]
 * Output: 4, 6, 7
 * Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
 * 
 * Example 2:
 * Input: [2, 4, 1, 2]
 * Output: 3
 * 
 * Example 3:
 * Input: [2, 3, 2, 1]
 * Output: 4
*/

/**
 * Input: [2, 3, 1, 8, 2, 3, 5, 1]
 * traverse the array and assign the current value to the value at its expected index
 * p1 = index = 0
 * traverse the array swapping values
 * if the value at array[p1] = value[p1]
 *      assign arr[p1] to null and move on
 * [1, 2, 3, null, 2, 3, 5, 8]
 *  1  2  3  4  5  6  7  8
 * 
 */

const findAllMissingNums = (numsArr) => {
    let missingNums = [],
        i = 0;
    
    while (i < numsArr.length) {
        let val = numsArr[i],
        valAtIndex = numsArr[val- 1];
        
        if (val && val !== i + 1 && val !== valAtIndex) {
            [numsArr[i], numsArr[val - 1]] = [valAtIndex, val];
        } else if (val && val !== i + 1 && val === valAtIndex) {
            numsArr[i] = null;
            i++;
        } else {
            i++;
        }
    }
    
    numsArr.forEach( (element, i) => {
        if (element === null) missingNums.push(i + 1);
    });

    return missingNums;
};

console.log("Missing nums in 2, 3, 1, 8, 2, 3, 5, 1]: ", findAllMissingNums([2, 3, 1, 8, 2, 3, 5, 1])); // => [4,6,7]
console.log("Missing nums in 2, 3, 1, 8, 2, 3, 5, 1]: ", findAllMissingNums([2, 4, 1, 2])); // => [3]
console.log("Missing nums in 2, 3, 1, 8, 2, 3, 5, 1]: ", findAllMissingNums([2, 3, 2, 1])); // => [4]
