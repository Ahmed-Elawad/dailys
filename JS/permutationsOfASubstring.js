/** Given a string and a pattern, find out if the string contains any permutation of the pattern.
 * 
 * Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
 * 
 * abc
 * acb
 * bac
 * bca
 * cab
 * cba
 * If a string has ‘n’ distinct characters, it will have n!n! permutations.
 * 
 * Example 1:
 * 
 * Input: String="oidbcaf", Pattern="abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 * Example 2:
 * 
 * Input: String="odicf", Pattern="dc"
 * Output: false
 * Explanation: No permutation of the pattern is present in the given string as a substring.
 * Example 3:
 * 
 * Input: String="bcdxabcdy", Pattern="bcdyabcdx"
 * Output: true
 * Explanation: Both the string and the pattern are a permutation of each other.
 * Example 4:
 * 
 * Input: String="aaacb", Pattern="abc"
 * Output: true
 * Explanation: The string contains "acb" which is a permutation of the given pattern.
*/

// O(!n + m) -> factorial time complexity for the pattern permutations + length of string
// O(!n) space. storing all permutaions for the pattern string which has !n possible combinations 
var permutationsOfASubstring = function(str, pattern) {
    let permutaions = {};
    // create a string variable
    pattern = pattern.split('');
    const createPermutations = (word, remaining) => {
        if (word.length === pattern.length) {
            permutaions[word] = true;
            return;
        }

        remaining.forEach((letter, i) => {
            let lettersLeft = remaining.slice(0, i).concat(remaining.slice(i + 1));
            createPermutations(word + letter, lettersLeft);
        })
    };
    createPermutations('', pattern);

    let windowStart = 0,
    windowEnd = pattern.length;
    while (str.length >= pattern.length && windowEnd <= str.length) {
        let currentSubSet = str.slice(windowStart, windowEnd);
        if (permutaions[currentSubSet]) return true;
        windowStart += 1;
        windowEnd += 1;
    }    
    // traverse string with a window width === pattern length
    // if any instance of the window matches a permutaion
    // return true

    return false
};
   

let string="oidbcaf", pattern="abc";
let result = permutationsOfASubstring(string, pattern);
console.log(result); // true

string="odicf";
pattern="dc";
result = permutationsOfASubstring(string, pattern);
console.log(result); // false;

string="bcdxabcdy";
pattern="bcdyabcdx";
result = permutationsOfASubstring(string, pattern);
console.log(result); // true;

string="aaacb";
pattern="abc";
result = permutationsOfASubstring(string, pattern);
console.log(result, '\n'); // true;


// O(n + m) time. a linear iteration over the string comparing the occurance of charecters once
// O(n) space. At worst need to store every single charecter in the pattern string
permutationsOfASubstring = (string, pattern) => {
    let charSet = {},
        subStrStart = 0,
        numOfMatches = 0;

    // map the occurances of each char in pattern
    for (let i = 0; i < pattern.length; i++) {
        if (!charSet[pattern[i]]) charSet[pattern[i]] = 1;
        else charSet[pattern[i]] += 1;
    }

    // traverse the input string
    for (let subStrEnd = 0; subStrEnd < string.length; subStrEnd++) {
        let currentChar = string[subStrEnd];

        // as long as the current letter exists in the charmap decrement it's count
        // only incrmement the match if the value of matched chars === 0
        if (charSet[currentChar] !== undefined) {
            charSet[currentChar] -= 1;
            if (!charSet[currentChar]) numOfMatches += 1;
        }

        // check the occurances of matches
        // return true if all mapped values have been matched
        if (numOfMatches === Object.keys(charSet).length) return true;

        // finally adjust the window size
        // if the first occuring char in the window is part of the charset
            // increment its count
        if (subStrEnd >= pattern.length -1) {
            let firstChar = string[subStrStart];
            if (charSet[firstChar] !== undefined) {
                if (charSet[firstChar] === 0) numOfMatches -= 1;
                charSet[firstChar] += 1;
            }
            subStrStart += 1;
        }
    }

    return false;
};  

console.log('Second Set with O(n + m) time O(m) space:')
string="oidbcaf", pattern="abc";
result = permutationsOfASubstring(string, pattern);
console.log(result); // true

string="odicf";
pattern="dc";
result = permutationsOfASubstring(string, pattern);
console.log(result); // false;

string="bcdxabcdy";
pattern="bcdyabcdx";
result = permutationsOfASubstring(string, pattern);
console.log(result); // true;

string="aaacb";
pattern="abc";
result = permutationsOfASubstring(string, pattern);
console.log(result); // true;
