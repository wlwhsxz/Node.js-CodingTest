function solution(s1, s2) {
    var answer = 0;
    for(let i of s1){
        s2.includes(i) ? answer++ : answer
    }
    return answer;
}