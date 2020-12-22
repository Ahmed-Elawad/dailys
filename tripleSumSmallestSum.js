/**
 * Given an array arr of unsorted numbers and a target sum, count all triplets
 * in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are 
 * three different indices. Write a function to return the count of such triplets.
 * 
 * Example 1:
 * 
 * Input: [-1, 0, 2, 3], target=3 
 * Output: 2
 * Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
 * Example 2:
 * 
 * -1 -> 0, 2, 3, 5, 6, 7, 8
 *        *     * -> 2 ++    
 *           *  * -> 5 
 *  0 -> 2, 3 
 * 
 * Input: [-1, 4, 2, 1, 3], target=5 
 * Output: 4
 * Explanation: There are four triplets whose sum is less than the target: 
 *    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
 */

/**
O(n ^ 3) time complexity
3 loops iterating over remaining values
var tripletSums = (arr, target) => {
    arr = arr.sort((a, b) => a-b);
    let numOfTriplets = 0;

    arr.forEach((firstVal, i) => {
        let remaining = arr.slice(i + 1);
        remaining.forEach((secondVal, j) => {
            let final = remaining.slice(j + 1);
            final.forEach((thirdVal) => {
                let sum = firstVal + secondVal + thirdVal;
                if (sum < target) {
                    numOfTriplets += 1;
                };
            })
        })
    })
    
    return numOfTriplets;
};
*/

// O(n ^ 2) time O(n) space (sorting)
var tripletSums = (arr, target) => {
    let numOfTriplets = 0;
    arr = arr.sort((a, b) => a -b);

    for (let i = 0; i < arr.length; i++) {
        let compliment = arr[i];
        let left = i + 1,
            right = arr.length - 1;

        while (left < right) {
            let sum = compliment + arr[left] + arr[right];
            if (sum < target) {
                numOfTriplets += right - left;
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return numOfTriplets;
}
console.log(tripletSums([-1, 0, 2, 3], 3));
console.log(tripletSums([-1, 4, 2, 1, 3], 5));
