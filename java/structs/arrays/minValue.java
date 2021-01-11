import java.utils.*;

class FindMinValue {

    /**
     * @Params {numArray(int[])}
     * Find the minimum value inside the array
     * @Returns {minValue(int)}
     * returns a single itnteger for the minimum value
     */
    public static int minValue(int[] arr) {
        int minValue = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < minValue) minValue = arr[i];
        }

        return minValue;
    }

    
}