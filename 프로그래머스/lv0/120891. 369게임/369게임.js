function solution(order) {
    var answer = 0;
    order = order.toString().split('').map(Number)
    for(let i of order){
        (i !== 0) && (i % 3 === 0) ? answer ++ : answer;
    }
    
    return answer;
}