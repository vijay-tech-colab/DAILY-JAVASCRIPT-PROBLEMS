function findPairs(nums, target) {
    const pairs = [];
    const seen = new Set();
    
    for (let num of nums) {
      const complement = target - num;
      if (seen.has(complement)) {
        pairs.push([complement, num]);
      }
      seen.add(num);
    }
    return pairs;
  }
  
  console.log(findPairs([1, 2, 3, 4, 5, 6], 7)); // Output: [[3, 4], [2, 5], [1, 6]]
  