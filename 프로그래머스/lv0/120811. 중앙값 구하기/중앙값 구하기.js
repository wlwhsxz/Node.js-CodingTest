function solution(array) {
    var answer = array.sort((a,b)=> {return a-b;});
    answer = answer[Math.floor(answer.length/2)]
    return answer;
}