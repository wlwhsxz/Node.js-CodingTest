function solution(array, height) {
    var answer = 0;
    for(let i of array){
        height < i ? answer++ : answer
    }
    return answer;
}