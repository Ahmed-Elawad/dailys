/**
 * Given an unsorted array containing numbers, find the smallest missing positive number in it. 
 * aka: ignore negatives and values outside the range
 * 
 * Example 1:
 * Input: [-3, 1, 5, 4, 2]
 * Output: 3
 * Explanation: The smallest missing positive number is '3'
 * 
 * Example 2:
 * Input: [3, -2, 0, 1, 2]
 * Output: 4
 * 
 * Example 3:
 * Input: [3, 2, 5, 1]
 * Output: 4
*/

const findSmallestMissingValue = (nums) => {
    if (!nums || !nums.length) return null;
    if (nums.length === 1) return nums[0];
    let i = 0;
    
    while (i < nums.length) {
        let val = nums[i];
        if (val > 0 && val < nums.length && val !== nums[val - 1]) {
                [nums[val - 1], nums[i]] = [nums[i], nums[val - 1]];
        } else {
            i++;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (val !== i + 1) return i + 1;
    }

    return null;

};

console.log(findSmallestMissingValue()) // => null;
console.log(findSmallestMissingValue()); // => null
console.log(findSmallestMissingValue([3])); // => [3]
console.log(findSmallestMissingValue( [-3, 1, 5, 4, 2])); // => 3
console.log(findSmallestMissingValue([3, -2, 0, 1, 2]))// => 4
console.log(findSmallestMissingValue([3, 2, 5, 1])); // => 4
