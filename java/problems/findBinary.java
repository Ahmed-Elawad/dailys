/**
 * In this problem, using a queue, you have to implement the String[] findBin(int number)
 * method to generate binary numbers from 1 to any given number (n).
 * 
 * Method Prototype:
 * String[] findBin(int number)
 * @Params {int(n)} => n > 0
 * 
 * Output:
 * It returns binary numbers up to n.
 * 
 * Sample Input:
 * n = 3
 * Sample Output:
 * result = {"1","10","11"}
*/


import java.utils.*;
import BasicQueue;

public String[] findBin(int n) {
    
    BasicQueue<String > queue = new Queue(n + 1);
    String[] result = new String[n];

    queue.enqueue("1");

    for (int i = 0; i < n; i++) {
        // queue up the next two numbers since binary incrementation
        // is based on the adddition of a "1" || "0" for a +1 addition
        // ie: 1 = "1" -> result[0] = "1"
        // 2 = "10" or result[0] (which is "1") + "0" -> "10"
        // 3 = "11" or result[0] (which is "1") + "1" -> "11" ...

        result[i] = queue.dequeue();
        String nextNum = result[i] + "0";
        String nextNumPlusOne = result[i] + "1";
        queue.enqueue(nextNum);
        queue.enqueue(nextNumPlusOne);
    }

    return resultArray;
}

