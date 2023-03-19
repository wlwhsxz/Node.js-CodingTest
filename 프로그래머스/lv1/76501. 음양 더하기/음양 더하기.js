function solution(absolutes, signs) {
    let answer = 0;
    for(let i in signs){
        signs[i] === true ? answer += absolutes[i] : answer += absolutes[i] * -1;
    }
    return answer;
}