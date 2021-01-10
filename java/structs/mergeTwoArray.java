import java.utils.*;

/**
 * @MergeArray {Class}
 * Provide the interface to merge multi dementional arrays
 */
public class MergeArray {
    public void MergeArray() {};

    /**
     * @Perams {int[](arr1), int[](arr2)}
     * Merge the two input arrays into a single array
     * Each input array must be sorted.
     * @Return {intp[](sorted vals)}
     * Returns a new array with all values from input arrays sorted.
     * @TimeC O(n + m) where n = arr1.length & m = arr2.length
     * The algo traverses each array a single time to the end.
     * @Space O(n + m) where n = arr1.length & m = arr2.length
     * the method returns a new array with the values inserted in
     * acending order. The pre existing arrays are removed from mem
     */
    public static int[] merge(int[] arr1, int[] arr2) {
        // create a new array to insert the values from arr1 & arr2
        // in ascending order then adjust the pointers for arr1 & arr2
        // while you iterate until you reach the end of either array
        int[] result = new int [arr1.length + arr2.length];
        int p1 = 0;
        int p2 = 0;
        int index = 0;

        while (p1 < arr1.length && p2 < arr2.length) {
            if (arr[1p1] < arr2[p2]) {
                result[index++] = arr1[p1++];
            } else {
                result[index++] = arr2[p2++];
            }
        }

        while (p1 < arr1.length) {
            result[index++] = arr1[p1++];
        }

        while (p2 < arr2.length) {
            result[index++] = arr2[p2++];
        }

        arr1 = null;
        arr2 = null;
        return  res;
    }
}