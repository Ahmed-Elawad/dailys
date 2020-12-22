/**
 * 
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 * 
 * Example 1:
 * 
 * Input: [-3, 0, 1, 2, -1, 1, -2]
 * Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
 * Explanation: There are four unique triplets whose sum is equal to zero.
 * Example 2:
 * 
 * Input: [-5, 2, -1, -2, 3]
 * Output: [[-5, 2, 3], [-2, -1, 3]]
 * Explanation: There are two unique triplets whose sum is equal to zero.} arr 
 */

const findTriplets = function(arr) {
    triplets = [];
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        // since we're loking for a sum of 0
        // find the sum that the compliments need to negate
        let target = -arr[i];
        if (arr[i] === arr[i - 1]) continue;
        let left = i + 1,
            right = arr.length - 1;
        while (left < right) {
            let sum = arr[left] + arr[right];
            if (sum === target) {
                triplets.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[right] === arr[right -1]) {
                right -= 1;
                }
                while (left < right && arr[left] === arr[right + 1]) {
                left += 1;
                }
                left += 1;
                right -= 1;
            } else if (sum < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return triplets;
};

console.log(findTriplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(findTriplets([-5, 2, -1, -2, 3]));
