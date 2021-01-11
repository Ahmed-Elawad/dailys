import java.utils.*;

class ProductsExceptSelf {

    /**
     * @params {Array(ints)}
     * Take an input array of integers and return an array where
     * each index will contain the product of all values in the array
     * except the element stored at i.
     * @Returns {Array(ints)}
     */
    private static boolean hasZero = false;

    /**
     * @params {numsArray(int[]), index(int), product(int)}
     * Takes a nums array reference, an index, and a cumulative product
     * keeps a running total of the product assigning a flag to true if
     * a zero is part of the list. Recurses to update the product until
     * at the end of the array. Once product is fully evauated, the 
     * stack pops each call updating the array @ index to the running
     * product
     * @returns {product(int)} returns the cumulative product of the array
     * Note: Call stack for large lists could cause stackOverflowException
     */
    private static int recurse(int[] arr, int index, int product) {
        if (index < arr.length) {
            if (arr[index] != 0) {
                product = recurse(arr, index + 1, product*arr[index]);
            } else {
                hasZero = true;
                product = recurse(arr, index + 1, product);
            }
        }
        
        // if the index is whithin bounds assing the current value
        if (index < arr.length) {
          if (arr[index] == 0 && hasZero) arr[index] = product;
          else if (hasZero) arr[index] = 0;
          else arr[index] = product/arr[index];
        }
        return product;
    }

    /**
     * @Params {numsArray(int[])}
     * recurses on the array to update each value
     * to the product of all other nums in the array
     * @Returns {numsArray(int[])} the same input array
     * with values updated in place
     * @Time O(n) time
     * @Space O(1) space 
     */
    public static int[] findProduct(int[] arr) {
        int product = 1;
        int index = 0;

        recurse(arr, index, product);

        return arr;
    }
}