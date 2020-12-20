/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 * 
 * Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
 * 
 * Example 1:
 * 
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 * Example 2:
 * 
 * Input: [2, 5, 9, 11], target=11
 * Output: [0, 2]
 * Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/

const pairTargetSum = (array, target) => {
    let pointerX = 0,
        pointerY = array.length - 1,
        sum = 0;

    while (pointerX <= pointerY) {
        sum = array[pointerX] + array[pointerY];
        if (sum === target) return [pointerX, pointerY];
        else if (sum < target) pointerX += 1
        else if (sum > target) pointerY -= 1;
    };

    return [];
};

let result = pairTargetSum([1, 2, 3, 4, 6], 6);
console.log(result); // [1, 3]

result = pairTargetSum([2, 5, 9, 11], 11);
console.log(result); // [0, 2]
