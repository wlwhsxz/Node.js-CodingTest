function solution(order) {
    var answer = 0;
    order.forEach((v, i) => {
        if(v.includes('americano')) answer += 4500;
        if(v.includes('cafelatte')) answer += 5000;
        if(v.includes('anything')) answer += 4500;
    })
    return answer;
}