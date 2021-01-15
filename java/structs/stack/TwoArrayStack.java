/**
 * In this problem, using a single array to store elements, you have to implement the
 * class TwoStacks<V>, having the following methods to generate two stacks.
 * 
 * Method Prototypes #
 * void push1(V value)
 * void push2(V value)
 * public V pop1()
 * public V pop2()
 * 
 * Input/Output:
 * push1()
 * Input: an integer
 * Output: inserts the given value in the first stack i.e. stack1
 * 
 * push2()
 * Input: an integer
 * Output: inserts the given value in the second stack i.e stack2
 * 
 * pop1()
 * Output: returns and remove the top value of stack1
 * 
 * pop2()
 * Output: returns and remove the top value of stack2
*/

import java.utils.*;

/**
 * Two array stack definition. Uses the convergence principle to define two positions for each stack
 * and adds the elements into the stacks until no more space is available.
 */
class TwoStackArray<V> {
    private int maxSize;
    private int stackOneTop, stackTwoTop; //Store top value indices of Stack 1 and Stack 2
    private V[] stack;

    @SuppressWarnings("unchecked")
    public TwoStackArray(int max_size) {
        this.maxSize = max_size;
        this.stackOneTop = -1;
        this.stackTwoTop = max_size;
        stack = (V[]) new Object[max_size];//type casting Object[] to V[]
    }

    public void push1(V value) {
        // validate that the first stack is not overflowing
        // before adding the value into the stack

        if (this.stackOneTop > this.stackTwoTop)
            return;
        else 
            this.stack[++this.stackOneTop] = value;
        
        return;
    }

    public void push2(V value) {
        // validate that the top of the stack is within the bounds
        // of the maxsize then add the element if possible

        if (this.stackOneTop > this.stackTwoTop) 
            return;
        else
            this.stack[--this.stackTwoTop] = value;
        return;
    }

    public V pop1() {
        // Determine if the stack has any elements and if so return that
        // element

        if (this.stackOneTop == -1)
            return null;
        else {
            V temp = this.stack[this.stackOneTop];
            this.stack[this.stackOneTop--] = null;
            return temp;
        }
    }

    public V pop2() {
        // Determine if the stack has any elements and if so return that
        // element

        if (this.stackTwoTop == this.maxSize) 
            return null;
        else {
            V temp = this.stack[this.stackTwoTop];
            this.stack[this.stackTwoTop++] = null;
            return temp;
        }
    }
}
