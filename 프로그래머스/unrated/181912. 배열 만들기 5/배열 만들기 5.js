function solution(intStrs, k, s, l) {
    var answer = [];
    for(let intStr of intStrs) {
        if(intStr.slice(s, s+l) > k)
        answer.push(Number(intStr.slice(s, s+l)))
    }
    return answer;
}