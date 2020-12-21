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
 * 
 * Input: [-3, -1, 1, 2], target=1
 * Output: 0
 * Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
 * Example 3:
 * 
 * Input: [1, 0, 1, 1], target=100
 * Output: 3
 * Explanation: The triplet [1, 1, 1] has the closest sum to the target.
 */

const tripletCloseToTarget = (arr, target) => {
    let lessThanSum = -Infinity,
        greaterSum = Infinity;

    arr  = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let compliment = arr[i];
        if (arr[i] === arr[i - 1]) continue;
        let left = i + 1;
        let right = arr.length -1;
        while (left < right) {
            let sum = arr[left] + arr[right] + compliment;
            if (sum === target) return sum;
            else if (sum < target && sum > lessThanSum) lessThanSum = sum;
            else if (sum < greaterSum) greaterSum = sum;
            left += 1;
            right -= 1;
        }
    }
    console.log(lessThanSum)
    console.log(greaterSum)
    // get the distance of each sum from the target and return the least of the two
    let lessSumDistance = target - lessThanSum;
    let greaterSumDistance = greaterSum - target;
    if (lessSumDistance === greaterSumDistance) return lessSumDistance;
    if (lessSumDistance < greaterSumDistance) return lessThanSum;
    return greaterSum;
};

let Input =  [-2, 0, 1, 2], target=2;
console.log(tripletCloseToTarget(Input, target));

// Input = [-3, -1, 1, 2], target=1;
// console.log(tripletCloseToTarget(Input, target));

// input =  [1, 0, 1, 1], target=100;
// console.log(tripletCloseToTarget(Input, target));
