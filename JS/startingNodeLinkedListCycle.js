/**
 * Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
*/

 // helper to find the length of the cycle
const findCycleLength = (slowNode) => {
    let length = 1,
        pointer = slowNode.next;

    while (pointer !== slowNode) {
        pointer = pointer.next;
        length += 1;
    }

    return length;
};

 // helper to return the node which the cycle starts
const getCycleStart = (head, length) => {
    let startPointer = head,
        endPointer = head;

    while (length > 0) {
        endPointer = endPointer.next;
        length -= 1;
    }

    while (startPointer !== endPointer) {
        startPointer = startPointer.next;
        endPointer = endPointer.next;
    };

    return  startPointer;
};

// find the  cycle and rteturn the head if there is no cycle
// then find the  length of the cycle assigning two pointers
    // one at the start of the  list and one n nodes from the start
    // where n is the cycle length
// traverse the list moving each node up one until the end is at the start
// return the node where the overlay occurs
// O(n) time with O(1) space
const findCycleStart = (head) => {
    let slow = head,
        fast = head;

    while (fast &&  fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            let  cycleLength = findCycleLength(slow);
            return getCycleStart(head, cycleLength);
        }
    }

    return head;
};


class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`) // -> LinkedList cycle start: 3

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`) // -> LinkedList cycle start: 4

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`) // -> LinkedList cycle start: 1
