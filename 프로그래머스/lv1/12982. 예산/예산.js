function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a,b) => a-b)

    for(let i of d){
        sum += i;
        if(sum > budget){
            break;
        }
        answer++;
    }
    return answer;
}