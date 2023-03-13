function solution(emergency) {
    var answer = [];
    for(i of emergency){
        let count = 1;
        for(j of emergency){
            i<j? count++ : count;
        }
        answer.push(count)
    }
    return answer;
}