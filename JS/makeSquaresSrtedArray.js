/**
 * 
 * Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
 * 
 * Example 1:
 * 
 * Input: [-2, -1, 0, 2, 3]
 * Output: [0, 1, 4, 4, 9]
 * Example 2:
 * 
 * Input: [-3, -1, 0, 1, 2]
 * Output: [0, 1, 1, 4, 9]} arr 
 */

const makeSquares = function(arr) {
    squares = []
    let left, right = 0;

    // move to an index where left val is negative and right val is positive
    while (arr[right] < 0) {
        if (arr[right + 1] === 0) {
            left = right;
            right  += 1; 
            break;
        };
        right += 1;
    }

    // traverse pointers in oposite directions
    // insert values in order into squares array
    while (arr[left] || arr[right]) {
        let leftVal = arr[left] * -1,
        rightVal = arr[right];

        // check if next index in right iteration is greater than left iteration
        // insert right keep left same pos
        if (arr[right + 1] < leftVal) {
            left += 1;
            squares.push(rightVal ** 2);5
        } else if (leftVal <= rightVal) squares.push(leftVal ** 2, rightVal ** 2)
        else if (rightVal <= leftVal) squares.push(rightVal ** 2, leftVal **2) 
        else if (leftVal) squares.push(leftVal ** 2)
        else if (rightVal) squares.push(rightVal ** 2);
        left -= 1;
        right += 1;
    }
    console.log(squares)
    return squares;
};

let result = makeSquares([-2, -1, 0, 2, 3]);
console.log(result);
result = makeSquares([-3, -1, 0, 1, 2]);
console.log(result);