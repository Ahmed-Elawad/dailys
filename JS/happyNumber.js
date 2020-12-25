/**
 * Any number will be called a happy number if, after repeatedly 
 * replacing it with a number equal to the sum of the square of
 * all of its digits, leads us to number ‘1’. All other (not-happy)
 * numbers will never reach ‘1’. Instead, they will be stuck in a
 * cycle of numbers which does not include ‘1’.

Example 1:

Input: 23  
Output: true (23 is a happy number)  
Explanations: Here are the steps to find out that 23 is a happy number:
1) (2^​2​​) + (3^​2)​ = 4 + 9 = 13
2) (1^2) + (3^2) = 1 + 9 = 10
3) (1^2) + (0^2) = 1 + 0 = 1

Example 2:

Input: 12   
Output: false (12 is not a happy number)  
Explanations: Here are the steps to find out that 12 is not a happy number:
1) (1^2) + (2^2) = 1 + 4 = 5
2) (5^2) = 25
3) (2^2) + (5^2) = 4 + 25 = 29
4) (2^2) + (9^2) = 4 + 81 = 85
5) (8^2) + (5^2) = 64 + 25 = 89
...
13) (5^2) + (8^2) = 25 + 64 = 89
Step ‘13’ leads us back to step ‘5’ as the number becomes equal to ‘89’,
this means that we can never reach ‘1’, therefore, ‘12’ is not a happy number.
 */

// time complexity. Just visit this link for info on sequence behaviour: 
// https://en.wikipedia.org/wiki/Happy_number#Sequence_behavior
// it's O(logN)
// space O(1)
const findSquareSum = (value) => {
    let sum = 0;
    while (value > 0) {
        let digit = value % 10;
        sum += digit * digit;
        value = Math.floor(value / 10);
    };

    return sum;
};

const isHappyNumber = (value) => {
    // assign a slow and fast sqr value
    let slowSqr = value,
        fastSqr = value;
    
    while (true) {
        slowSqr = findSquareSum(slowSqr);
        fastSqr = findSquareSum(findSquareSum(fastSqr));
        if (slowSqr === fastSqr) break;
    }

    return slowSqr === 1;
};

console.log(`${isHappyNumber(23)}`) // true
console.log(`${isHappyNumber(12)}`) // false
console.log(`${isHappyNumber(13)}`) // true
console.log(`${isHappyNumber(14)}`) // false
console.log(`${isHappyNumber(15)}`) // false
console.log(`${isHappyNumber(16)}`) // false
console.log(`${isHappyNumber(17)}`) // false
console.log(`${isHappyNumber(19)}`) // true
