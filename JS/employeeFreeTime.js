/**
 * For ‘K’ employees, we are given a list of intervals representing the working
 * hours of each employee. Our goal is to find out if there is a free interval
 * that is common to all employees. You can assume that each list of employee
 * working hours is sorted on the start time.
 * 
 * Example 1:
 * Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
 * Output: [3,5]
 * Explanation: Both the employees are free between [3,5]
 * 
 * Example 2:
 * Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
 * Output: [4,6], [8,9]
 * Explanation: All employees are free between [4,6] and [8,9]
 * 
 * Example 3:
 * Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
 * Output: [5,7]
 * Explanation: All employees are free between [5,7]
*/

/**
 * [[[1,3], [5,6]]
 *     *
 * [[2,3], [6,8]]]
 *  *
 * 
 * p1 = [1,3]
 * p2 = [2,3]
 * 
 * p1Start = 1,
 * p1End = 3
 * p2S = 2
 * p2E = 3
 * 
 * if p2E < p1E
 *      increment p2E
 * else 
 *      increment p1E
 * 
 * assign end to greates of p1E or p2E     
 *      
 */

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
};

const find_employee_free_time = function(schedule) {
    let gaps = [];

    const merge = (array) => {
        let merged = [],
            start = array[0].start,
            end = array[0].end;
        for (let i = 1; i < array.length; i++) {
            if (array[i].start < end) {
                end = array[i].end;
                continue;
            }

            merged.push(new Interval(start,  end));
            start = array[i].start;
            end = array[i].end;
        }

        merged.push(new Interval(start,  end));
        return merged;
    };

    schedule = schedule.reduce((list, item) => {
                    item.forEach((interval) => list.push(interval));
                    return list;
                }, []);

    schedule = schedule.sort((a, b) => a.start - b.start);
    schedule = merge(schedule);
    
    if (schedule.length > 1) {
        let start = schedule[0].end,
            end = schedule[1].start,
            p = 1;
            debugger;
        while (p < schedule.length) {
            if (start && end && start !== end) gaps.push(new Interval(start, end));
            p++;
            start = schedule[p - 1].end;
            end = p < schedule.length ? schedule[p].start : null;
        }
    }

    return gaps;


};

let intervals = find_employee_free_time([[new Interval(1, 3), new Interval(5, 6)], [new Interval(2, 3), new Interval(6, 8)]])
let result = "Free intervals: ";
for(i=0; i < intervals.length; i++) {
    result += intervals[i].get_interval();
}
console.log(result);


intervals = find_employee_free_time([[new Interval(1, 3), new Interval(9, 12)], [new Interval(2, 4)], [new Interval(6, 8)]]);
result = "Free intervals: ";
for(i=0; i < intervals.length; i++) {
    result += intervals[i].get_interval();
}
console.log(result);

intervals = find_employee_free_time([[new Interval(1, 3)], [new Interval(2, 4)], [new Interval(3, 5), new Interval(7, 9)]]);
result = "Free intervals: ";
for(i=0; i < intervals.length; i++)
  result += intervals[i].get_interval();
console.log(result);
