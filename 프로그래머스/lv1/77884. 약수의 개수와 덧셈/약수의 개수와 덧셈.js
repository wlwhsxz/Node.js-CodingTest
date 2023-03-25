function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
    
        let divisor = [];
        for(let j=1; j<=i; j++){
            if(i%j === 0) {
               divisor.push(j) 
            }
        }
        divisor.length % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}