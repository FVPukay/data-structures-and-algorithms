class Solution {
    public int pivotIndex(int[] nums) {
        // Time: O(N)
        // Space: O(1)
        
        int sum = 0, leftSum = 0;

        for(int num: nums) sum += num;  // Time: O(N)

        for(int num = 0; num < nums.length; num++) {  // Time: O(N)
            if (leftSum == sum - leftSum - nums[num]) {
                return num;
            }
            leftSum += nums[num];
        }

        return -1;
    }
}
