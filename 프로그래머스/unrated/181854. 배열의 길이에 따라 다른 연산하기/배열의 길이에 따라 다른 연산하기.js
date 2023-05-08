function solution(arr, n) {
    var answer = []
    if(arr.length % 2 !== 0) {
        arr.forEach((v, i) => i%2 === 0 ? answer.push(v+n) : answer.push(v))
    } else {
        arr.forEach((v, i) => i%2 !== 0 ? answer.push(v+n) : answer.push(v))
    }
    return answer;
}