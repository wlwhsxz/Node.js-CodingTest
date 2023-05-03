function solution(num_list, n) {
    var answer = [];
    for(let i in num_list){
        i = Number(i)
        if(i === n) break;
        answer.push(num_list[i])
    }
    return answer;
}