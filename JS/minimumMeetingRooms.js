/**
 * Given a list of intervals representing the start and end time of ‘N’ meetings,
 * find the minimum number of rooms required to hold all the meetings.
 * 
 * Example 1:
 * 
 * Meetings: [[1,4], [2,5], [7,9]]
 * Output: 2
 * Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can 
 * occur in any of the two rooms later.
 * 
 * Example 2:
 * Meetings: [[6,7], [2,4], [8,12]]
 * Output: 1
 * Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
 * 
 * Example 3:
 * Meetings: [[1,4], [2,4], [3,6], [6,7]]
 * Output: 3
 * Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to 
 * hold all the meetings.
 * 
 * Example 4:
 * Meetings: [[4,5], [2,3], [2,4], [3,5]]
 * Output: 2
 * Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
*/

class Meeting {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

let findNumOfRoomsNeeded = (meetings) => {
    let numOfRooms = 1,
        originalMeeting = 0,
        nextMeeting = 1,
        currentNeeded = 1;

    meetings = meetings.sort((a, b) => a.start - b.start);

    while (meetings[nextMeeting] && originalMeeting < meetings.length) {

        let remainingMeetings = meetings.length - nextMeeting;

        if (meetings[originalMeeting].end > meetings[nextMeeting].start) {
            currentNeeded++;
        } else {
            currentNeeded = 1;
            originalMeeting++;
        }
        numOfRooms = Math.max(currentNeeded, numOfRooms);
        nextMeeting++;
    
        if (remainingMeetings <= numOfRooms) break;
    }

    return numOfRooms;
};

let meetings = [[4,5], [2,3], [2,4], [3,5]].reduce((list, interval) => {
        list.push(new Meeting(interval[0], interval[1])); 
        return list;
    }, []);
let numOfRooms = findNumOfRoomsNeeded(meetings);
console.log(numOfRooms); // => 2

numOfRooms = findNumOfRoomsNeeded([new Meeting(6,7), new Meeting(2,4), new Meeting(8,12)]);
console.log(numOfRooms); // => 1

numOfRooms = findNumOfRoomsNeeded([new Meeting(1,4),new Meeting(2,3),new Meeting(3,6)]);
console.log(numOfRooms); // => 3

numOfRooms = findNumOfRoomsNeeded([new Meeting(4,5), new Meeting(2,3),new Meeting(2,4),new Meeting(3,5)]);
console.log(numOfRooms); // => 2


// console.log(`Minimum meeting rooms required: ${findNumOfRoomsNeeded(
//     [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
// console.log(`Minimum meeting rooms required: ${findNumOfRoomsNeeded(
//     [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
// console.log(`Minimum meeting rooms required: ${findNumOfRoomsNeeded(
//     [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
// console.log(`Minimum meeting rooms required: ${findNumOfRoomsNeeded(
//     [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
// console.log(`Minimum meeting rooms required: ${findNumOfRoomsNeeded(
//     [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
