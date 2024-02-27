/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
  const counts = {};
  const majorityCount = Math.floor(nums.length / 2);

  for (let num of nums) {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }

    if (counts[num] > majorityCount) {
      return num;
    }
  }
  // This return is theoretical because the problem statement assures a majority element always exists.
  // Therefore, the loop should always return before reaching this point.
  return null;
};

// sol1.
// nums.sort((a, b) => a-b)
// nums = [2,3,3]

// sol2.
// const count = 0;
// const firstNum = nums[0]
// nums.map((num) => {
//  if(num === firstNum) {
//   count++;
//   if(count >= nums.length/2) return num;
//  }  
//   }) 

// sol3.
// const firstNum = nums[0];
//     const firstNumArr = [];
//     const secondNumArr = [];
//     nums.map((num) => {
//         num === firstNum ? firstNumArr.push(num) : secondNumArr.push(num);
//     })
//     return firstNumArr.length > secondNumArr.length ? firstNumArr[0] : secondNumArr[0] 