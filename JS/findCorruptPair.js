/**
 * We are given an unsorted array containing ‘n’ numbers taken
 * from the range 1 to ‘n’. The array originally contained all
 * the numbers from 1 to ‘n’, but due to a data error, one of
 * the numbers got duplicated which also resulted in one number
 * going missing. Find both these numbers.
 * 
 * Example 1:
 * Input: [3, 1, 2, 5, 2]
 * Output: [2, 4]
 * Explanation: '2' is duplicated and '4' is missing.
 * 
 * Example 2:
 * Input: [3, 1, 2, 3, 6, 4]
 * Output: [3, 5]
 * Explanation: '3' is duplicated and '5' is missing.
*/

/**
 *  - values are 1 indexed => when sorting i - 1, when matching to i - i + 1
 *  - array is unsorted
 * - need to return tuple: [theDuplicatedValue,  missingValue]
 *      - index of duplicated value || arr[i] !== i + 1
 */
const findMissingValue = (numArray) => {
    if (!numArray || !numArray.length) return [];
    let corruptCouple = [],
        i  = 0;

    while (i < numArray.length) {
        let val = numArray[i];
        
        if (val !== i + 1) {
            if (val === numArray[val - 1]) {
                corruptCouple[0] = val;
                i++;
            } else {
                [numArray[val - 1], numArray[i]] = [numArray[i], numArray[val - 1]];
            }
        } else {
            i++;
        }
    }
    

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] === i + 1) continue;
        if (numArray[i] === corruptCouple[0]) {
            corruptCouple.push(i + 1);
            break;
        }
    }

    return corruptCouple;
};

console.log(findMissingValue()); //=> null
console.log(findMissingValue([])); // => null
console.log(findMissingValue([1,2,3,4,5,6])); // => []
console.log(findMissingValue([3, 1, 2, 5, 2])); // => [2,4] 
console.log(findMissingValue([3, 1, 2, 3, 6, 4])); // => [3,5]
