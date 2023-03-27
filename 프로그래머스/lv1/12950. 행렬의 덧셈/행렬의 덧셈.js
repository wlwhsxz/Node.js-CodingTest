function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<arr1.length; i++){
        let sum = [];
        for(let j=0; j<arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j]) 
            // 1번째 1+3, 2번째 2+4 
            // 3번째 2+5 4번째 3+6
        }
        answer.push(sum) // 첫 i - [4,6], 두 번째 i - [7,9]
    }
    return answer;
}