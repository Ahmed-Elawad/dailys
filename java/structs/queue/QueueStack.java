/**
 * Provide a class to implement a Queue of the generics type
 * using a stack for the Queue & Dequeue methods.
*/

/**
 * Initialize the Queue with two stacks. As items are queued add them
 * into the stack reference. For a dequeue the elements are moved to
 * the top elements stack to access the first element and reverted into
 * the stack once the bottom element is accessed
 */
public class QueueStack <V> {
    private Stack<V> stack;
    private Stack<V> topElements;

    public void QueueStack(int maxSize) {
        this.stack = new Stack<>(max_size);
        this.topElements = new Stack<>(max_size - 1);
    }

    /**
     * Check if the queue is empty or has atleast one element
     * @Params {none}
     * @Returns {boolean}
     * Returns true if empty, false if not
     */
    public boolean isEmpty() {
        return this.stack.isEmpty() == true;
    }

    /**
     * Add an element to the front of the queue.
     * @Params {V(element)}
     * @Returns {none}
     */
    public void enqueue(V element) {
        this.stack.push(element);
    }

    /**
     * Remove the first item added to the queue and return the item.
     * @Params {none}
     * @Returns {<V>}
     * Accesses the stack and returns the bottom element of the stack
     * returns null if empty
     */
    public V dequeue() {
        // Move the items from the stack to the top elements stack to access
        // the first element added. Then return them to the original stack & 
        // return the accessed bottom element w/o returning it into the stack

        if (this.isEmpty()) return null;
        V bottomElement;
        while (this.stack.getCurrentSize() > 1) {
            this.topElements.push(this.stack.pop());
        }
        bottomElement = this.stack.pop();

        while (this.topElements.getCurrentSize() > 0) {
            this.stack.push(this.topElements.pop());
        }
        return bottomElement;
    }
}