function solution(nums) {
    var answer = 0;
    
    let numsLen = new Set(nums).size;
    let numsN = nums.length/2;
    
    numsLen > numsN ? answer = numsN : answer = numsLen
    
    
    return answer;
    
}