/**
 * Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
* 
* Example 1:
* 
* Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
* Output: [2, 3], [5, 6], [7, 7]
* Explanation: The output list contains the common intervals between the two lists.
* Example 2:
* 
* Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
* Output: [5, 7], [9, 10]
* Explanation: The output list contains the common intervals between the two lists.
*/

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    getInterval() {
        return  `[${this.start}, ${this.end}]`;
    }
};

/**
 * find all  intersections for two interval lists
 * @param {[intervals]} listA -> array of intervals {start, end}
 * @param {[intervals]} listB -> array of intervals {start, end}
 * @returns {[intervals]}  an array containing intersections {start, end}
 * from list a and list B
 * @timeComplexity O(n + m) -> n: list A length, m: list B length
 * In the worst case traverses and compares every interval in list A  to  list B
 * @space O(n + m) in the worst case each inteval of list A intersects with
 * to adjacent interval in list B
 */

const merge = (listA, listB) => {
    let intersections = [];
    let listAindex = 0,
        listBIndex = 0;
    
    //  keep traversing the list while  we have interections in either
    while (listAindex < listA.length && listBIndex < listB.length) {
        
        // define some references to the start and end for each interval
        // if there is an overlap add that intersection to our list
        // finally increment the pointer in  the list where the interval ends first
        // to check for another intersection
        let intervalA = listA[listAindex],
            intervalB = listB[listBIndex],
            intervalAStart = intervalA.start,
            intervalAEnd = intervalA.end,
            intervalBStart = intervalB.start,
            intervalBEnd = intervalB.end,
            start = Math.max(intervalAStart, intervalBStart) ,
            end = Math.min(intervalAEnd, intervalBEnd);
        
        if  (start <= end) intersections.push(new  Interval(start, end));
        
        // check for which interval ends first and  increment the pointer 
        // for that list
        if (intervalAEnd === intervalBEnd) {
            listAindex += 1;
            listBIndex += 1;
        } else  if (intervalBEnd <= intervalAEnd) {
            listBIndex += 1;
        } else {
            listAindex += 1;
        }
    }
    
    // return the accumulated intersections
    return intersections;
};

let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
let interval = '';
for (i = 0; i < result.length; i++) {
  interval += result[i].getInterval();
}
console.log(interval);

process.stdout.write('Intervals Intersection: ');
result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
interval = '';
for (i = 0; i < result.length; i++) {
    interval += result[i].getInterval();
};
console.log(interval);