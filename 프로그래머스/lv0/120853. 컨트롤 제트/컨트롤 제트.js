function solution(s) {
    var answer = 0;
    s = s.split(' ').map(Number);
    console.log(s);
    for(let i in s){
        isNaN(s[i]) ? answer -= s[i-1] : answer += s[i];
    }
    return answer;
}