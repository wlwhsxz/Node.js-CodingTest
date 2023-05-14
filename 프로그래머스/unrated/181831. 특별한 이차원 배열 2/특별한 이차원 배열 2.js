function solution(arr) {
    var answer = 0;
    for(let i in arr){
        for(let j in arr[i]){
            if(arr[i][j] === arr[j][i]) answer = 1
            else {
                return 0
            }
        }
    }
    return answer;
}