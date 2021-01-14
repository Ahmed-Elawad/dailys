/**
 * Implements a basic queue using FiFO method. The queue is defined with a maximum
 * size with index calculation to keep the assisgnments within range. To prevent
 * Queue overload/overide method enqueues to the queue should be accompanied
 * by a conditional to confirm the realtionship of numOfItemsEnqueued < queueMax
 */

import java.utils.*;

public class Queue <V>{

    private int maxsize;
    private int front;
    private int back;
    private int size;
    private V queueArray;

    // uses type casting for the array queue to create an array of a generic type
    // Not reccomended, but this is for a simple practice implementation so errors
    // and learning oppertunities are encoureged.
    // Visit for more: https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html
    // or: https://www.javacodegeeks.com/the-problem-with-creating-generic-arrays.html
    @SuppressWarnings
    public void Queue(int maxSize) {
        this.maxsize = maxSize;
        this.front = 0;
        this.back = 1;
        this.size = 0;
        this.queueArray = (V[]) new Object[maxSize];
    }

    /**
     * Return the maxsize of the queue
     * @Params {none}
     * @Returns {int(maxsize)}
     */
    public int maxSize() {
        return this.maxsize;
    }

    /**
     * Return the current number of items stored in the
     * queue
     * @Params {none}
     * @Returns {int(Size of queue)}
     */
    public int size() {
        return this.size;
    }

    /**
     * Return whether the queue is full
     * @Params {none}
     * @Returns {boolean}
     * returns true if full, false if is not full
     */
    public boolean isFull() {
        // return a comparison of the number of items in the queue
        // to the total items currently stored

        return this.size < this.maxsize;
    }

    /**
     * Returns if the queue is empty
     * @Params {none}
     * @Returns {boolean}
     * Returns true if the queue is empty, false if it has
     * atelast one item.
     */
    public boolean isEmpty() {
        return this.size == 0;
    }

    /**
     * Add an item into the queue
     * @Params {V(element to add)}
     * @Returns {none}
     */
    public void enqueue(V element) {
        // add an alement to the back of the queue ensuring that
        // the assignment index is always within bounds of the 
        // maxsize alloted

        if (this.isFull()) return;
        this.back = (this.back + 1) % this.maxSize;
        this.queueArray[this.back] = element;
        this.size++;
        return;
    }

    /**
     * Remove an item from the back of the queue if there 
     * are elements present.
     * @Params {none}
     * @Returns {V(front element in the queue)}
     * Returns the first item added to the queue.
     * Note: Returns null if empty
     */
    public V dequeue() {
        // confirm that the queue is not empty and return the
        // proper element if one is present

        if (this.isEmpty()) return;
        V frontElement = this.queueArray[front];
        this.queueArray[this.front] = null;
        this.front = (this.front + 1) % this.maxsize;
        this.size--;
        return frontElement;
    }
}