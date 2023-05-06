function solution(strArr) {
    let answer = []
    strArr.forEach((value, index) => {
        (index) % 2 === 0 ? answer.push(value.toLowerCase()) : answer.push(value.toUpperCase())   
    })
    return answer;
}