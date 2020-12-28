/**
 * We are given an array containing positive and negative numbers.
 * Suppose the array contains a number ‘M’ at a particular index. 
 * Now, if ‘M’ is positive we will move forward ‘M’ indices and if
 * ‘M’ is negative move backwards ‘M’ indices. You should assume 
 * that the array is circular which means two things:
 * 
 * If, while moving forward, we reach the end of the array, we will jump to the 
 * first element to continue the movement.
 * If, while moving backward, we reach the beginning of the array, we will 
 * jump to the last element to continue the movement.
 * Write a method to determine if the array has a cycle. The cycle should have more than 
 * one element and should follow one direction which means the cycle should not contain 
 * both forward and backward movements.
 * 
 * Example 1:
 * 
 * Input: [1, 2, -1, 2, 2]
 * Output: true
 * Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
 * Example 2:
 * 
 * Input: [2, 2, -1, 2]
 * Output: true
 * Explanation: The array has a cycle among indices: 1 -> 3 -> 1
 * Example 3:
 * 
 * Input: [2, 1, -1, -2]
 * Output: false
 * Explanation: The array does not have any cycle.
*/

const getPosition = (index, array, forward) => {
    let spacesToMove = array[index],
        length = array.length - 1;

    if (forward && spacesToMove < 0) return false;
    if (!forward && spacesToMove > 0) return false;

    index = index + spacesToMove;

    if (index > length) return index - length - 1;
    return index;
};

const circularArrayLoopExists = (array) => {
    for (let i = 0; i < array.length; i++) {
        let slow = i,
            fast = i,
            slowForward = array[slow] > 0 ? true : false,
            fastForward = array[fast] > 0 ? true : false;

        while (true) {     
            debugger;
            slow = getPosition(slow, array, slowForward);
            fast = getPosition(getPosition(fast, array, fastForward), array, fastForward);
            if (slow === fast) return true;
            if (slow === false || fast == false) break;
        }
    }

    return false;
};

console.log(circularArrayLoopExists([1, 2, -1, 2, 2])); // true
console.log(circularArrayLoopExists([2, 2, -1, 2])); // true
console.log(circularArrayLoopExists([2, 1, -1, -2])); // false
