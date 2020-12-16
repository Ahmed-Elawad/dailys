/**
* Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest
* contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
* 
* Example 1:
* 
* Input: [2, 1, 5, 2, 3, 2], S=7 
* Output: 2
* Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
* Example 2:
* 
* Input: [2, 1, 5, 2, 8], S=7 
* Output: 1
* Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
* Example 3:
* 
* Input: [3, 4, 1, 1, 6], S=8 
* Output: 3
* Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/


// verbose
var smallest_subarray_with_given_sum = (S, arr) => {

    let minWidth = arr.length,
        windowSum = 0,
        windowStart = 0,
        windowEnd = 0,
        windowWidth = windowEnd - windowSum;

    // itarate to the end of the array using windowEnd
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // add current value in arr to window sum
        windowSum+= arr[windowEnd];
        windowWidth++;        

        // if the windowSum > s and the windowWidth <= shortestWidth
        if (windowSum > S && windowWidth <= minWidth) {

            while (windowSum >= S) {
                windowSum-= arr[windowStart];
                windowWidth--;
                windowStart++;
                
                if (windowSum >= S) {
                    minWidth = windowWidth;
                }
            }
        } else if (windowSum === S && windowWidth < minWidth) {
            minWidth = windowWidth;
            windowSum-= arr[windowStart];
            windowStart++;
        }
    }

    return minWidth;
};

let result = smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]); 
console.log(result) // 2

result = smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]);
console.log(result) // 1

result = smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]);
console.log(result) // 1


// concise 
smallest_subarray_with_given_sum = (S, arr) => {
    // define the smallest possible width and your window
    let minWidth = arr.length,
        windowSum = 0,
        windowWidth = 0,
        windowStart = 0;

    // // iterate the array chaging window size if sum is => S
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        windowWidth += 1;
        // debugger;
        while (windowSum >= S) {
            minWidth = windowWidth < minWidth ? windowWidth : minWidth;
            windowSum -= arr[windowStart];
            windowStart += 1;
            windowWidth -= 1;
        }
    }

    return minWidth;
};

result = smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]); 
console.log(result) // 2

result = smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]);
console.log(result) // 1

result = smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]);
console.log(result) // 1
