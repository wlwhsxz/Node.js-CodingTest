// function solution(array) {
//     var answer = 0;
//     for(let i of array){
//         i = i.toString().split('');
//         for(let j=0; j<i.length; j++){
//             i[j] === '7' ? answer++ : answer;
//         }
//     }
//     return answer;
// }

function solution(array) {
    console.log(array.join('').split('7'))
    return array.join('').split('7').length-1;
}

