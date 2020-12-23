/**
 * Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.
 * 
 * Example 1:
 * 
 * Input: [4, 1, 2, -1, 1, -3], target=1
 * Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
 * Explanation: Both the quadruplets add up to the target.
 * Example 2:
 * 
 * Input: [2, 0, -1, 1, -2, 2], target=2
 * Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
 * Explanation: Both the quadruplets add up to the target.
 */


// -3, -1, 1, 1, 2, 4

// -3 -> -1, 1, 1, 2, 4
//              * *
//        
// initial iterator to store a start point
// define a sum using inital, right, and left
// if sum is less than target
    // if there are any values in between
    // use the sum to seacrh for a suplement value in inner array
// other wise
    // decrement right
const quadrupletSum = (array, target) => {
    let quadruplets = [];
    array = array.sort((a, b) => a - b);

    const findPairing = (left, right, target) => {
        let inner = left + 1;
        while (left < right && inner < right) {
            if (array[inner] === target) {
                return inner;
            } else if (array[inner] < target) {
                inner += 1;
            } else {
                break;
            }
        }
        return - 1;
    };

    for (let i = 0; i < array.length; i++) {
        let initial = array[i];
        let left = i + 1,
            right = array.length - 1;
        while (left < right - 1) {
            let sum = initial + array[left] + array[right];
            if (sum < target) {
                let pairIndex = findPairing(left, right, target - sum);
                if (pairIndex !== -1) {
                    quadruplets.push([initial, array[left], array[pairIndex], array[right]]);
                };
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return quadruplets;
};


console.log(quadrupletSum([4, 1, 2, -1, 1, -3], 1));
console.log(quadrupletSum([2, 0, -1, 1, -2, 2], 2));
