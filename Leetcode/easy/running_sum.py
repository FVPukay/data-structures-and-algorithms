class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        for num in range(1, len(nums)):
            nums[num] += nums[num-1]
            
        return nums

''' 

38 ms
Beats
96.59%
Memory
14 MB
Beats
93.87%

'''
