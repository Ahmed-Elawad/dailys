import java.utils.*;

/**
 * A stack in java can use an array or linked list implementation.
 * Arrays use less space in memeory
 * Available methods for stacks are: isEmpty, top, size, push and pop
 */
public class Stack<V> {

    private int maxSize;
    private int top;
    private V arr;

    /**
     * Stack constructor. Provide the object instance with an intitialized
     * size of 0, top of -1, and an empty stack.
     * Implementation uses type casting on Object class for the generics array since
     * java does not permit arrays of generics.
     * More info: https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html
     * or: https://www.javacodegeeks.com/the-problem-with-creating-generic-arrays.html
    */
    @SuppressWarnings("unchecked")
    public Stack(int maxSize) {
        this.maxSize = maxSize;
        this.top = -1;
        this.arr = (V[]) new Object[maxSize];
    }

    /**
     * Return the assigned maximum size for the stack. 
     * @Params {none}
     * @Returns {int(max size of stack)}
     * NOTE: Cannot reassign max size of the stack, non dynamic
     */
    public int getMaxSize() {
        return this.maxSize;
    }

    /**
     * Return whether the stack is empty or has some elements
     * @Params {none}
     * @Returns {True(is empty), False(is not empty)}
     */
    public boolean isEmpty() {
        // Check if the current top is at the intialized position indicating
        // that either the stack never had an addition or all elements are
        // removed

        return this.top == -1;
    }

    /**
     * Check if the stack is at its maximum capacity.
     * @Params {none}
     * @Returns {Boolean}
     * False: stack has room
     * True: stack is full
     */
    public boolean isFull() {
        // Compare the current top to the maxsize reduced by 1
        // to match the indexing of the stack

        return this.top == this.maxSize - 1;
    }

    /**
     * Get the top element in the stack. 
     * @Params {none}
     * @Returns {V(Top element) or NULL}
     * Returns null if the stack is empty
     */
    public V top() {
        // Check the stack for elements than return the correct result

        if (this.isEmpty()) return null;
        return this.arr[top];
    }

    /**
     * Add an element to the top of the stack
     * @Params {V(element to add)}
     * @Returns {none}
     */
    public void push(V element) {
        // check the size of the stack before adding the element
        // If there is room add the new element and adjust the size and top

        if (this.isFull()) {
            // should maybe throw exception or add error handling for specific
            // implementation needs
            System.out.println("Stack is full");
        } else {
            this.arr[++top] = element;
        }
    }

    /**
     * Remove the top element from the stack
     * @Params {none}
     * @Returns {V(the top element) or NULL}
     * Returns the top element of the stack if there is one
     * otherwise returns NULL
     */
    public V pop(){
        // Check the size and decrement the top pointer if
        // the stack is not empty

        if (this.isEmpty()) return null;
        return this.arr[top--];
    } 
}
