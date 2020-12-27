/**
 * Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
 * 
 * Your algorithm should use constant space and the input LinkedList
 * should be in the original form once the algorithm is finished.
 * The algorithm should have O(N) time complexity where ‘N’ 
 * is the number of nodes in the LinkedList.
 * 
 * Example 1:
 * 
 * Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
 * Output: true
 * 
 * Example 2:
 * Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
 * Output: false
*/

const assignReversePointer = (head, length) => {
    let pointer = head;
    // debugger;
    while (length > 1) {
        pointer = pointer.next;
        length -= 1;
    };
    return pointer;
};

const palindromeList = (head) => {
    
    let pointer = head,
        length = 0;
    
    while (pointer) {
        length += 1;
        pointer = pointer.next;
    };

    let remaining = length,
        endPointer = assignReversePointer(head, remaining),
        startPointer = head;

    while (remaining >= Math.floor(length / 2)) {
       if (endPointer.value !== startPointer.value) return false;
       remaining -= 1;
       endPointer = assignReversePointer(head, remaining);
       startPointer = startPointer.next;
    };

    return true;
};

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
};

let head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(palindromeList(head)); // -> true

head.next.next.next.next.next = new Node(2)
console.log(palindromeList(head)); // false
