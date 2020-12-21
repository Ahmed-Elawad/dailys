/**
 * Given an array of unsorted numbers and a target number, find a triplet in
 * the array whose sum is as close to the target number as possible, return 
 * the sum of the triplet. If there are more than one such triplet, return 
 * the sum of the triplet with the smallest sum.
 * 
 * Example 1:
 * 
 * Input: [-2, 0, 1, 2], target=2
 * Output: 1
 * Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
 * Example 2:
 *  -2 -> 0, 1, 2
 *           *  * -> 1 return 1
 *   0 -> 1, 2
 *         * * -> 3
 *  1 -> 2 -> 3 xxxx
 * 
 * Input: [-3, -1, 1, 2], target=1
 * Output: 0
 * Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
 * Example 3:
 * 
 * - 3 -> -1 , 1, 2
 *         *      * -> -2 
 *             * * -> 0 return 0
 * -1 -> 1, 2 -> 2 
 *  1, 2, -> 3 XX
 * 
 * Input: [1, 0, 1, 1], target=100
 * Output: 3
 * Explanation: The triplet [1, 1, 1] has the closest sum to the target.
 */

const tripletCloseToTarget = (arr, target) => {
    // sort the array O(n * log(n))
    // define some arbitrary min and max sums
    arr = arr.sort((a, b) => a - b);
    let leastSum = -Infinity,
        greatestSum = Infinity;
    
    // traverse the array assinging a min and max sum if they are closest to the target
    for (let i = 0; i < arr.length; i++) {
        let compliment = arr[i];
        let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        let left = 0, right = remaining.length - 1;

        // use the remaining values to find all combinations for the target sum
        while (left < right) {
            let sum = compliment + remaining[left] + remaining[right];
            if (sum === target) return sum;
            else if (sum > target) {
                right -= 1;
                if (sum < greatestSum) greatestSum = sum;
            } else {
                left += 1;
                if (sum > leastSum) leastSum = sum;
            }
        };
    }
    
    let distanceToLeastSum = target - leastSum;
    let distanceToGreatesSum = greatestSum - leastSum;
    if (distanceToGreatesSum === distanceToLeastSum) return leastSum;
    if (distanceToLeastSum < distanceToGreatesSum) return leastSum;
    return greatestSum;
};

console.log(tripletCloseToTarget([0, -2, 1, 2], 2)); // 1
console.log(tripletCloseToTarget([-3, 1, 1, 2], 1)); // 0
console.log(tripletCloseToTarget([1, 0, 1, 1], 100)); // 3
