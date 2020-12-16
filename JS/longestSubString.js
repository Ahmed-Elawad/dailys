/**
* Given a string, find the length of the longest substring in it with no more than K distinct characters.
* Example 1:
* Input: String="araaci", K=2
* Output: 4
* Explanation: The longest substring with no more than '2' distinct characters is "araa".
* 
* Example 2:
* Input: String="araaci", K=1
* Output: 2
* Explanation: The longest substring with no more than '1' distinct characters is "aa".
* 
* Example 3:
* Input: String="cbbebi", K=3
* Output: 5
* Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 */

// O(n) or O(n + n) -> a single outer for loop with a single comparisiong for each value so O(n).
// storage? O(K) -> store at max K values in hash map
var longest_substring_with_k_distinct = (str, k) => {

    let longestSubString = 0,
        storage = {size: 0},
        windowStart = 0,
        substring = '';

    const instantiate = (char) => {
        storage.size++;
        return 1;
    };

    // iterate over the string
        // accumulate values into a substr until there are k distinct chars
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        
        substring += str[windowEnd];
        storage[str[windowEnd]] = storage[str[windowEnd]] === undefined ? instantiate(str[windowEnd]) : storage[str[windowEnd]]+=1;

        while (storage.size > k ) {
            longestSubString = longestSubString > windowEnd - windowStart? longestSubString : windowEnd - windowStart;
            let popped = str[windowStart];
            storage[popped] = --storage[popped];
            
            if (!storage[popped]) {
                delete storage[popped];
                storage.size--;
            }
            
            windowStart += 1;
            substring = str.slice(windowStart, windowEnd + 1);
            
        }
    }

    return longestSubString;
};

let result = longest_substring_with_k_distinct('cbbebi', 2);
console.log(result);

result = longest_substring_with_k_distinct("araaci",1);
console.log(result);

result = longest_substring_with_k_distinct("cbbebi", 3);
console.log(result);
