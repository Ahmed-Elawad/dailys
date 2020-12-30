/**
 * Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
 * 
 * Example 1:
 * 
 * Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
 * Output: [[1,3], [4,7], [8,12]]
 * Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
 * Example 2:
 * 
 * Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
 * Output: [[1,3], [4,12]]
 * Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
 * Example 3:
 * 
 * Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
 * Output: [[1,4], [5,7]]
 * Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
*/

const insert = (intervalList, interval) => {
    let merged = [];
    let start = intervalList[0].start,
        end = intervalList[0].end;

    for (let i = 0; i < intervalList.length; i++) {
        let currentInterval = intervalList[i];
        if (interval && interval.start <= currentInterval.end || interval.end <= currentInterval.end) {
            currentInterval.start = Math.min(interval.start, currentInterval.start);
            currentInterval.end = Math.max(interval.end, currentInterval.end);
            interval = false;
        };

        if (currentInterval.start <= end || currentInterval.end <= end) {
            start = Math.min(start, currentInterval.start);
            end = Math.max(end, currentInterval.end);
        } else {
            merged.push(new Interval(start, end));
            start = currentInterval.start;
            end = currentInterval.end;
        }
    }
    merged.push(new Interval(start, end));
    return merged;
};

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    };

    print_interval() {
        return `[${this.start}, ${this.end}]`;
    }
};


let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
let intervals = '';
for (i = 0; i < result.length; i++) {
    intervals += result[i].print_interval();
};
console.log(intervals);

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
intervals = '';
for (i = 0; i < result.length; i++) {
    intervals += result[i].print_interval();
};
console.log(intervals)

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
  new Interval(5, 7),
], new Interval(1, 4));
intervals = '';
for (i = 0; i < result.length; i++) {
    intervals += result[i].print_interval();
};
console.log(intervals)
