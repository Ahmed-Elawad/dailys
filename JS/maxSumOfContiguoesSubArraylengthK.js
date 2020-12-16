/**
* Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
* 
* Example 1:
*
* Input: [2, 1, 5, 1, 3, 2], k=3 
* Output: 9
* Explanation: Subarray with maximum sum is [5, 1, 3].
 */


// Verbose code -> window of current k values in array
const max_sub_array_of_size_k = function(k, arr) {
    if (!arr || !arr.length) return [];
    if (arr.length <= k) return arr.slice(0, k + 1);
  
    let subArray = arr.slice(0, k),
        start = 0,
        end = start + 2,
        greatestSum = 0;
  
    for (let i = start; i <= end; i++) {
      greatestSum+= arr[i];
    };
  
    let runningSum = greatestSum;
    end+= 1;
    start+= 1;
  
    while (end <= arr.length) {
        let newSum = runningSum - arr[start - 1];
        newSum+= arr[end];
    
        if (newSum > greatestSum) {
            subArray = arr.slice(start, end + 1);
            greatestSum = newSum;
        }
  
        end+= 1;
        start+= 1;
        runningSum = newSum;
    }

    
    return greatestSum
};

let result = max_sub_array_of_size_k(3, [2,1,5,1,3,2]); // 9

// concise code -> trailing window
// 
// const max_sub_array_of_size_k = function(k, arr) {
//     let maxSum = 0,
//         windowStart = 0,
//         windowSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         windowSum+= arr[i];

//         if (i >= k - 1) {
//             maxSum = Math.max(windowSum, maxSum);
//             windowSum-= arr[windowStart];
//             windowStart+= 1;
//         }
//     }

//     return maxSum;
// };

//result = max_sub_array_of_size_k(3, [2,1,5,1,3,2]); // 9     
            