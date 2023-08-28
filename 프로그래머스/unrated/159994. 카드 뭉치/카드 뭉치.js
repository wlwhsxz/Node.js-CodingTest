function solution(cards1, cards2, goal) {
    
    var answer = []
    
    goal.forEach((_, i) => {
        if(cards1.indexOf(goal[i]) === 0) {
            answer.push(cards1.shift());
        } else if(cards2.indexOf(goal[i]) === 0) {
            answer.push(cards2.shift());
        } else if(cards1.indexOf(goal[i]) === -1) {
            cards1.shift();
        } else if(cards2.indexOf(goal[i]) === -1) {
            cards2.shift();
        }
    })
    
    
    return answer.join('') === goal.join('') ? "Yes" : "No";
}


// function solution(cards1, cards2, goal) {
//     var answer = '';
//     let arr = [];
    
//     console.log(cards1, cards2, goal)
//     for(let i of goal){
//         for(let j of cards1){
//             if(i === j){
//                 arr.push(j);
//             }
//         }
//         for(let k of cards2){
//             if(i === k){
//                 arr.push(k);
//             }
//         }
//     }
//     if(arr === goal){
//         answer = 'Yes';
//     } else {
//         answer = 'No';
//     }
    
//     return answer;
// }