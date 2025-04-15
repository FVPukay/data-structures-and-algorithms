# Time: O(N), N is the size of nums
# Space: O(K), the deque cannot grow beyond that size


from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        queue = deque()
        ans = []
        for i in range(len(nums)):
            while queue and nums[i] > nums[queue[-1]]:
                queue.pop()
            queue.append(i)
            if queue[0] + k == i:
                queue.popleft()
            if i >= k - 1:
                ans.append(nums[queue[0]])
        return ans
