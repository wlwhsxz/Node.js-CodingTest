/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let arr = [];
    for(let i=1; i<=nums.length; i++) {
        if(nums[i] !== nums[i-1]) arr.push(nums[i])
    }

    for(let j=1; j<=arr.length; j++) {
        nums[j] = arr[j-1];
    }

    k = arr.length;

    return k;
};