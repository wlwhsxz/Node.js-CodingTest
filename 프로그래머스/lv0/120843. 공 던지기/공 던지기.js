function solution(numbers, k) {
    var answer = 0;
    let arr = [];
    for(let i=0; i<k; i++){
        arr.push(numbers);
    }
    arr = arr.toString().split(',');
    answer = Number(arr[2*(k-1)]);
    
    return answer;
}