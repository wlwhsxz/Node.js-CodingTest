function solution(todo_list, finished) {
    var answer = [];
    todo_list.map((v, i) => !finished[i] ? answer.push(v) : answer)
    
    return answer;
    
}