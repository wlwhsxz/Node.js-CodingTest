function solution(arr, delete_list) {
    var answer = [];
    arr.map(x=> delete_list.includes(x) ? answer : answer.push(x))
    return answer;
}