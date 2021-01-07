/**
 * We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.
 * 
 * Example 1:
 * 
 * Input: [3, 4, 4, 5, 5]
 * Output: [4, 5]
 * Example 2:
 * 
 * Input: [5, 4, 7, 2, 3, 5, 3]
 * Output: [3, 5]
*/

const find_all_duplicates = function(nums) {
    duplicateNumbers = {};
    let i = 0;
    
    while (i < nums.length) {
      let val = nums[i],
          isAtCorrectIndex = val === i +1,
          isDup = val === nums[val - 1];
  
      if (!isAtCorrectIndex) {
        if (isDup) {
          duplicateNumbers[val] = true;
          i++;
        } else {
          [nums[val - 1], nums[i]] = [val, nums[val - 1]];
        }
      } else {
        i++;
      }
    }
    
    return Object.keys(duplicateNumbers).map((val) => Number(val));
  };


console.log(find_all_duplicates( [3, 4, 4, 5, 5]))

console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]))
