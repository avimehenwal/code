var twoSum = function (nums: Array<number>, target: number) {
  // nums.sort();
  console.log(`${nums}`);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`${nums[i]} + ${nums[j]} === ${target} index [${i}, ${j}]`);
        return [i, j];
      }
    }
  }
  return false;
};

twoSum([2, 7, 11, 15], 9);
