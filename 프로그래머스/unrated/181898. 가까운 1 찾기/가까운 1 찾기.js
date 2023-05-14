function solution(arr, idx) {
    var answer = -1;
    for(let i in arr){
        if(arr[i] && Number(i) >= idx) return Number(i)
    }
    
    return answer
}