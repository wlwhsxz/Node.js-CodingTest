function solution(x1, x2, x3, x4) {
    var answer = true;
    const sum1 = x1 || x2
    const sum2 = x3 || x4
    answer = sum1 && sum2
    return answer;
}