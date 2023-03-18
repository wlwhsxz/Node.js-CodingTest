function solution(s) {
    var answer = '';
    for(let i of s){
        let curStr  = i;
        let count = 0;
        for(let j of s){
            i === j ? count++ : count;
        }
        
        count === 1 ? answer += i : answer;
    }
    return answer.split('').sort().join('');
}