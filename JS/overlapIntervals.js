/**
 * Problem 1: Given a set of intervals, find out if any two intervals overlap.
 * 
 * Example:
 * 
 * Intervals: [[1,4], [2,5], [7,9]]
 * Output: true
 * Explanation: Intervals [1,4] and [2,5] overlap
*/

const overlap = (intervals) => {
    if (intervals.length <= 1) return false;

    intervals  = intervals.sort((a, b) => a.start - b.start);

    let start = intervals[0].start,
        end = intervals[0].end;

    for (let i = 1; i < intervals.length;  i++) {
        let currentInterval = intervals[i];
        if (currentInterval.start <= end || currentInterval.end <= end) return true;
    };

    return false;
};

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    };

};

let overlaped = overlap([new Interval(1, 4), new Interval(2, 5), new Interval(7,9)]);
console.log('[1,4], [2,5], [7,9] interval has overlap:', overlaped)// -> true

overlaped = overlap([new Interval(1, 3), new Interval(4, 5), new Interval(7,9)]);
console.log('[1,3], [4,5], [7,9] interval has overlap:', overlaped)// -> false
