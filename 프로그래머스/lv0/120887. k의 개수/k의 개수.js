function solution(i, j, k) {
    var answer = 0;
    for(let a=i; a<=j; a++){
        let arr = a.toString().split('').map(Number)
        for(let b=0; b<arr.length; b++){
            arr[b] === k ? answer++ : answer;
        }
    }
    return answer;
}