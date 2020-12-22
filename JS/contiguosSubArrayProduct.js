/**
 * Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.
 * 
 * Example 1:
 * 
 * Input: [2, 5, 3, 10], target=30 
 * Output: [2], [5], [2, 5], [3], [5, 3], [10]
 * Explanation: There are six contiguous subarrays whose product is less than the target.
 * 
 * 2, 5, 3, 10
 * 2 -> [2]
 * 2, 5 -> [2, 5] - > [[2], [2, 5]]
 * 2, 5, 3 -> 30 
 * 
 * Example 2:
 * Input: [8, 2, 6, 5], target=50 
 * Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
 * Explanation: There are seven contiguous subarrays whose product is less than the target.
*/

var findSubArrays = (array, target) => {
    let subArrays = [];
    
    for (let left = 0; left < array.length; left++) {
        if (array[left] < target) subArrays.push([array[left]]);
        let right = left + 1;
        let product = array[left] * array[right];
        while (product < target) {
            subArrays.push([array.slice(left, right + 1)]);
            right += 1;
            product *= array[right];
        }
    }

    return subArrays;
};

console.log(findSubArrays([2, 5, 3, 10], 30));
console.log(findSubArrays([8, 2, 6, 5], 50));