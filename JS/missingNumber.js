/**
 * We are given an array containing ‘n’ distinct numbers taken
 * from the range 0 to ‘n’. Since the array has only ‘n’ numbers
 * out of the total ‘n+1’ numbers, find the missing number.
 * 
 * Example 1:
 * Input: [4, 0, 3, 1]
 * [ 0 , 1 , u, 3]
 * Output: 2
 * 
 * Example 2:
 * Input: [8, 3, 5, 2, 4, 6, 0, 1]
 * [0, 1, 2, 3, 4, 5, 6, u]
 *   0 1  2  3  4  5 6  7
 * Output: 7
*/

const findMissingNum = (numArr) => {
    let missingNum;

    for (let i = 0; i < numArr.length; i++) {
        let currentVal = numArr[i];
        
        while (currentVal !== undefined && currentVal !== i) {
            let temp = numArr[currentVal];
            
            if (currentVal < numArr.length) [numArr[i], numArr[currentVal]] = [temp,  currentVal];
            else {
                numArr[i] = temp;
                break;
            }
            
            if (temp === undefined) missingNum = i;
            currentVal = temp;
        }
    }
    
    // traverse the array and find the missing value
    return missingNum;
};

console.log(findMissingNum([4, 0, 3, 1])); // =>  2
console.log(findMissingNum([8, 3, 5, 2, 4, 6, 0, 1])); // => 7