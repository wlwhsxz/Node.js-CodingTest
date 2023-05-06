function solution(num_list, n) {
    let answer = 0
    for(let i of num_list){
        i === n ? answer = 1 : answer
    }
    return answer;
}