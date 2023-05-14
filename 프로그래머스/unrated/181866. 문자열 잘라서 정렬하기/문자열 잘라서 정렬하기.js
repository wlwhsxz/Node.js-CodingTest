function solution(myString) {
    answer = [];
    let sorted = myString.split('x').sort()
    sorted.filter(x=> x === '' ? x : answer.push(x))
    return answer
}