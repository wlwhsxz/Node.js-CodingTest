function solution(num_list, n) {
    var answer = [[]];
    let array = num_list.slice()
    for (let i = 0; i < num_list.length; i++) {
        if(array.length < 1) break;
        answer[i] = array.splice(0, n);
    }
    return answer;
}