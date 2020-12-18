/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than
 * ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 *
 * Example 1:
 * 
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 * Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 */


 const maxSubArrayWithReplace = (array, k) => {
    let longestSubArray = 0,
        numOfChanges = 0,
        windowStart = 0;

        
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        if (!array[windowEnd]) numOfChanges += 1; // increment num of chages

        // while the numOfchanges is greayer than k
            // if the value at the start of the window is false
                // decremtn numOfchanges
            // mover the start of the window over 1
        while (numOfChanges > k) {
            if (!array[windowStart]) numOfChanges -= 1;
            windowStart += 1;
        }

        longestSubArray = Math.max(longestSubArray, windowEnd - windowStart + 1);
        // assing longest subarray to the length of the current subArray -> end - start + 1
    }

    return longestSubArray;
 };

 let Array = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k = 2;
 let result = maxSubArrayWithReplace(Array, k);
 console.log(result);
