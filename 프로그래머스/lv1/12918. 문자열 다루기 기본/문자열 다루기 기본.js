function solution(s) {
    var answer = true;
    (s.length === 4 || s.length === 6) && !(s.match(/[A-z]/g)) ? answer : answer = false ;
    return answer;
}