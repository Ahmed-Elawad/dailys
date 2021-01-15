/**
 * In this problem, you have to implement the void reverseK(Queue<V> queue, int k) method;
 * this will take a queue and any number (k) as input, and reverse the first k elements
 * of the queue.
 * 
 * Method Prototype:
 * V[] reverseK(Queue<V> queue, int k) 
 * Output:
 * An array with the first “k” elements reversed.
 * 
 * Sample Input:
 * Queue = {1,2,3,4,5,6,7,8,9,10}
 * k = 5
 * Sample Output;
 * result = {5,4,3,2,1,6,7,8,9,10}
*/

import Stack;

public class ReverseKInQueue<V> {

    /**
     * Static method definition
     */
    public static <V> void reverseK(Queue<V> queue, int k) {
        // Store the k items to be reveres in a stack than repopulate the 
        // queue using the remianing elements inside the queue

        int queuedItems = queue.getCurrentSize();
        Stack<V> stack = new Stack<V>(queuedItems);
        
        while (k > 0) {
            stack.push(queue.dequeue());
            k--;
        }
        
        while (!stack.isEmpty()) {
            queue.enqueue(stack.pop());
            queuedItems--;
        }

        while (queuedItems > 0) {
            queue.enqueue(queue.dequeue());
            queuedItems--;
        }

    }
}
