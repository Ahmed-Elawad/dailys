/**
 * Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
 * 
 * Example 1:
 * 
 * Appointments: [[1,4], [2,5], [7,9]]
 * Output: false
 * Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
 * Example 2:
 * 
 * Appointments: [[6,7], [2,4], [8,12]]
 * Output: true
 * Explanation: None of the appointments overlap, therefore a person can attend all of them.
 * Example 3:
 * 
 * Appointments: [[4,5], [2,3], [3,6]]
 * Output: false
 * Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
*/


/**
 * 
 * @param {[Intervals(start, end)]} apointmentIntervals 
 * @returns {Boolean} => false if appointments overlap, true
 * if there is no overlap. Start !== end
 * @time O(N * LogN) Comparisons take O(N), but sorting is 
 * O(N * LogN)
 * @space O(N), needed to sort the array, otherwise constant space
 */
const canAttendAllApointments = (apointmentIntervals) => {

    apointmentIntervals = apointmentIntervals.sort((a, b) => a.start - b.start);
    
    let end = apointmentIntervals[0].end;

    for (let i = 1; i < apointmentIntervals.length; i++) {
        let currentInterval = apointmentIntervals[i];
        if (currentInterval.start < end) return false;
        end = currentInterval.end;
    }

    // default case
    return true;
};

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return `[${this.start}, ${this.end}]`;
    }
}

/**
 * Appointments: [[1,4], [2,5], [7,9]]
 * Output: false
 * Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
*/
let canAttendAll = canAttendAllApointments([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
console.log(canAttendAll); // => false

/**
 * Example 2:
 * 
 * Appointments: [[6,7], [2,4], [8,12]]
 * Output: true
 * Explanation: None of the appointments overlap, therefore a person can attend all of them.
*/
canAttendAll = canAttendAllApointments([new Interval(6, 7), new Interval([2, 4], new Interval(8, 12))]);
console.log(canAttendAll); // => true


/**
 * Appointments: [[4,5], [2,3], [3,6]]
 * Output: false
 * Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
*/
canAttendAll = canAttendAllApointments([new Interval(4, 5), new Interval(2,3), new Interval(3, 6)]);
console.log(canAttendAll); // => false
