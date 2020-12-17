/**
* Given an array of characters where each character represents a fruit tree,
* you are given two baskets, and your goal is to put maximum number of fruits
* in each basket. The only restriction is that each basket can have only one type of fruit.
* 
* You can start with any tree, but you can’t skip a tree once you have started. You will pick
* one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
* 
* Write a function to return the maximum number of fruits in both the baskets.
* 
* Example 1:
* 
* Input: Fruit = ['A', 'B', 'C', 'A', 'C']
* Output: 3
* Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
 */

var fruits_into_baskets = (fruits) => {
    let maxFruits = 0,
        baskets = {}, // max two fruit types
        basketsSize = 0,
        windowStart = 0,
        windowWidth = 0;

    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {

        
        let currentFruit = fruits[windowEnd];
        if (baskets[currentFruit] === undefined) {
            baskets[currentFruit] = 1;
            basketsSize += 1;
        } else if (baskets[currentFruit] === 0) {
            baskets[currentFruit] += 1;
        }
        
        windowWidth += 1;  

        while (basketsSize > 2) {
            maxFruits = maxFruits > windowWidth ? maxFruits : windowWidth;
            let toRemove = fruits[windowStart];
            if (baskets[toRemove] === 1) {
                delete baskets[toRemove];
                basketsSize -= 1;
            } else {
                baskets[toRemove] -= 1;
            }
            windowWidth -= 1;
            windowStart += 1;
        }
    }
    
    maxFruits = maxFruits > windowWidth ? maxFruits : windowWidth;

    return maxFruits;
};

let result = fruits_into_baskets(['A','B','C','B','B','C']) // 5
console.log(result);
