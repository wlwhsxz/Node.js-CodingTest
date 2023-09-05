// function solution(arr1, arr2) {
//     var answer = [];
    
//     arr1.forEach((_, i) => {
        
//         let arr = [];
        
//         arr2.forEach((_, j) => {
//             let sum = 0;
            
//             arr2[j].forEach((_, k) => {
//                 sum += arr1[i][k] * arr2[k][j];
//             })
//             arr.push(sum);
//         })
//         answer.push(arr);
//     })
    
//     return answer;
// }

function solution(arr1, arr2) {
    const answer = []

    for(let arr1RowIdx=0;arr1RowIdx<arr1.length;arr1RowIdx++){
        const rows = []
        for(let arr2ColIdx=0;arr2ColIdx<arr2[0].length;arr2ColIdx++){
            let sum = 0
            for(let arr1ColIdx=0;arr1ColIdx<arr1[arr1RowIdx].length;arr1ColIdx++){
                sum += arr1[arr1RowIdx][arr1ColIdx] * arr2[arr1ColIdx][arr2ColIdx]
            }
            rows.push(sum)
        }
        answer.push(rows)
    }

    return answer
}