class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        # Time: O(N)
        # Space: O(1)
        
        sum = 0
        left_sum = 0

        for num in nums:  # Time: O(N)
            sum += num

        for num in range(len(nums)):  # Time: O(N)
            if left_sum == sum - left_sum - nums[num]:
                return num
            left_sum += nums[num]

        return -1

'''

Runtime
172 ms
Beats
82.55%
Memory
15.3 MB
Beats
49.23%

''' 
