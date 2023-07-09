function solution(arr) {
    var answer = [];
    
    if(arr.indexOf(2) === -1) return [-1];
    let first = arr.indexOf(2);
    let last = arr.lastIndexOf(2) + 1;
    
    arr.slice(first, last).map(v => answer.push(v))
    return answer;
}