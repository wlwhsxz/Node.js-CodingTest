function solution(myString) {
    var answer = '';
    const lCode = 'l'.charCodeAt()
    for(let i of myString) {
        i.charCodeAt() < lCode ? answer += 'l' : answer += i
    }
    return answer;
}