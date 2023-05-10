function solution(my_string) {
    var answer = [];
    my_string.split(' ').map(x=> x.match(/[A-z]/g) ? answer.push(x) : x)
    return answer
}