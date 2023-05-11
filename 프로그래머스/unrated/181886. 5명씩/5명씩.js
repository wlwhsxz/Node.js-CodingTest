function solution(names) {
    var answer = [];
    names.map((v,i) => i%5 === 0 ? answer.push(v) : v)
    return answer;
}