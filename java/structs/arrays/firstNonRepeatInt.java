import java.utils.*;

class FindFirstNonRepeatingInt {

    /**
     * @Params {numsArray(int[])}
     * Traverses the array and finds the first non 
     * repeating value inside the array
     * @Returns {number(int)} 
     * returns the first non repeating val as an int
     * @Time O(n ^ 2)
     * @space O(1)
     */
    public static int findFirstUnique(int[] arr) {
        boolean isDup = false;

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (j == i) continue;
                if (arr[j] == arr[i]) {
                    isDup = true;
                    break;
                }
                if (isDup) {
                    isDup = false;
                } else {
                    return arr[i];
                }
            }
        }
        
        return -1;
    }
}