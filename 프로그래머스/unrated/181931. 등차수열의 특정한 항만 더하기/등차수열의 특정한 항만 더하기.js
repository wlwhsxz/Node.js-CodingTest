function solution(a, d, included) {
    var answer = 0;
    included.map(v => {
        if(v) answer += a 
        a += d;
    })
    return answer;
}