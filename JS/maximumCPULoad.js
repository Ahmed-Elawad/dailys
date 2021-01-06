/**
 * We are given a list of Jobs. Each job has a Start time,
 * an End time, and a CPU load when it is running. Our goal
 * is to find the maximum CPU load at any time if all the jobs
 * are running on the same machine.
 * 
 * Example 1:
 * 
 * Jobs: [[1,4,3], [2,5,4], [7,9,6]]
 * Output: 7
 * Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
 * jobs are running at the same time i.e., during the time interval (2,4)
 * 
 * Example 2:
 * Jobs: [[6,7,10], [2,4,11], [8,12,15]]
 * Output: 15
 * Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
 * 
 * Example 3:
 * Jobs: [[1,4,2], [2,4,1], [3,6,5]]
 * Output: 8
 * Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4]. 
*/

class Task {
    constructor(start, end, load) {
        this.start = start;
        this.end = end;
        this.load = load;
    }
}

const mergeIntervals = (tasks) => {
    let merged = [],
        start = tasks[0].start,
        end = tasks[0].end,
        load = tasks[0].load;

    for (let i = 1; i < tasks.length; i++) {
        if (tasks[i].start < end) {
            end = Math.max(end, tasks[i].end);
            load+= tasks[i].load;
        } else {
            merged.push(new Task(start, end, load));
            load = tasks[i].load;
            start = tasks[i].start;
            end = tasks[i].end;
        }
    }
    
    merged.push(new Task(start, end, load));
    return merged;
}


const findMaximumLoad = (tasks) => {
    if (!tasks || !tasks.length) return 0;
    if (tasks.length < 2) return tasks[0].load;
    
    let maxLoad = 0;

    tasks = tasks.sort((a, b) => a.start - b.start)
    tasks = mergeIntervals(tasks);
    
    tasks.forEach((task) => maxLoad = Math.max(task.load, maxLoad));
    debugger;

    return maxLoad;
};


let jobs = [[1,4,3], [2,5,4], [7,9,6]].map((j) => new Task(j[0], j[1], j[2]));
let maxLoad = findMaximumLoad(jobs);
console.log(maxLoad);

jobs = [[6,7,10], [2,4,11], [8,12,15]].map((j) => new Task(j[0],j[1],j[2]));
maxLoad = findMaximumLoad(jobs);
console.log(maxLoad);

jobs = [[1,4,2], [2,4,1], [3,6,5]].map((j) => new Task(j[0],j[1],j[2]));
maxLoad = findMaximumLoad(jobs);
console.log(maxLoad);
