function solution(food) {
    var answer = '';
    console.log(food)
    for(let i in food) {
        i = +i+1;
        if(food[i] === 1) continue;
        answer += (i).toString().repeat(Math.floor(food[i] / 2))
    }
    answer += "0";
    for(let i=answer.length-2; i>=0; i--) {
        answer += answer[i]
    }
    return answer;
}