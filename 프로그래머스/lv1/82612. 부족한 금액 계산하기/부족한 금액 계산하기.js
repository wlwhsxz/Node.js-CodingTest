function solution(price, money, count) {
    var answer = 0;
    for(let i=1; i<=count; i++){
        answer += price * i
    }
    answer -= money

    return answer <= 0 ? 0 : answer;
}