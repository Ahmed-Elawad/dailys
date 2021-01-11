import java.utils.*;

public class FindTwoNumSum {

    /**
     * @params {int[](unsorted), int(targetValue)}
     * Sort the array values in ascending order in O(NlogN) time
     * and return  the pair of nums that add to target
     * @ returns {int[]} Tuple array containing the values that
     * add up to the sum. If no pair is found values in tuple are
     * assigned to -1;
     * @time asymptotically O(NlogN) sorting + O(n) traversal
     * @space O(1) ignoring return tuple
     */
    public static int[] findSum(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;
        int[] result = new int[2];
        if (result.length < 2) {
            result[0] = -1;
            result[1] = -1;
            return result;
        };

        Arrays.sort(arr);

        while (start < end) {
            int sum = arr[start] + arr[end];
            if (sum == target) {
                result[0] = arr[start];
                result[1] = arr[end];
                return result;
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
      
        return [];
    }
}