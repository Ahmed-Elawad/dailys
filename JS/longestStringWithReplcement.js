/**
 * Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.
 * 
 * Example 1:
 * 
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
 */


 const length_of_longest_substring = (str, k) => {
     // track the longestStr, firsNewCharIndex, originalChar, windowOfChars
     let longestStr = 0,
        firstNewChar = 0,
        charectars = {},
        subStrStart = 0,
        subStrLength = 0, 
        numOfChanges = k;

    // traverse the string adding each letter to a reference of a currentString
        // if there are no more changes
            // assign the longest string to the comparision of the current string length to the previos longest
            // restart the number of changes count
            // jump to the position where the first new charecter was encountered
    for (let subStrEnd = 1; subStrEnd < str.length; subStrEnd++) {
        let letter = str[subStrEnd];
        if (originalChar !== letter) {
            if (numOfChanges === k) {
                numOfChanges -= 1;
                // subStrLength += 1;
                firstNewChar = subStrEnd;
            } else if (numOfChanges >= 1) {
                numOfChanges -= 1;
                // subStrLength;
            } else {
                longestStr = subStrLength > longestStr ? subStrLength : longestStr;
                originalChar = null;
                subStrStart = firstNewChar;
                subStrLength = 0;
                numOfChanges = k;
            }
            
        }
        
        if (originalChar === null) {
            originalChar = str[subStrStart];
            subStrEnd = subStrStart;
        };
        subStrLength += 1;
    }
    
    return subStrLength > longestStr ? subStrLength : longestStr;
};

let result = length_of_longest_substring('aabccbb', 2);
console.log(result) // 5

result = length_of_longest_substring('abbcb', 1);
 console.log(result) /// 4

result = length_of_longest_substring('abccde', 1);
 console.log(result) // 3
