function solution(numbers) {
    var answer = 0;
    let arr = [0,1,2,3,4,5,6,7,8,9];
    for(let i of arr){
        numbers.indexOf(i) > -1 ? answer : answer += i
    }
    return answer;
}