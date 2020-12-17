/**
 * Given a string, find the length of the longest substring, which has no repeating characters.
 * 
 * Example 1:
 * 
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring without any repeating characters is "abc".} str 
 */

const non_repeat_substring = (str) => {
    // track longest substring, duplicate chars, subString
    let longestStr = 0,
        characters = {size: 0},
        windowStart = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentChar = str[windowEnd];

        // remove the very first char added
        // slide the window to the right
        if (characters[currentChar]) {
            longestStr = longestStr > characters.size ? longestStr : characters.size;
            characters.size--;
            windowStart = characters[currentChar];
        }
        
        // add the charecter at each instance of the loop
        characters[currentChar] = windowEnd;
        characters.size += 1;
    }
    
    // do a final check  for the longest str
    longestStr = longestStr > characters.size ? longestStr : characters.size;
    return longestStr;
};

let result = non_repeat_substring("gabcacbb"); // 4
console.log(result);
