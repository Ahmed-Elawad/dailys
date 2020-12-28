/**
 * Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
 * 
 * Your algorithm should not use any extra space and the input LinkedList should be modified in-place.
 * 
 * Example 1:
 * 
 * Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
 * Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
 * Example 2:
 * 
 * Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
 * Output: 2 -> 10 -> 4 -> 8 -> 6 -> null
*/


const reverselist = (head)  => {
    let prev = head,
    current = head.next;
    prev.next = null
    
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    
    return  prev;
};
const reorder = (head) => {
    let slow = head,
        fast = head,
        midpoint = head;

    while (fast) {
        if (fast.next === null || fast.next.next === null) {
            midpoint = slow.next;
            slow.next = null;
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    };
    let secondHalf = reverselist(midpoint);
    let pointer = head;
    
    while (pointer) {
        let tempOne = pointer.next;
        if (tempOne === null) break;
        let tempTwo = secondHalf.next;
        pointer.next = secondHalf;
        secondHalf.next = tempOne;
        secondHalf = tempTwo;
        pointer = tempOne;
    }

    return head;
};

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    };

    print_list() {
       let result = "";
       let temp = this;
       while (temp !== null) {
         result += temp.value + " ";
         temp = temp.next;
       }
       console.log(result);
    }
};


let head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list() // ->  2 12 4 10 6

head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
reorder(head)
head.print_list() // -> 2 10 4 8 6
