// function solution(t, p) {
//     const numberP = Number(p);
//     let count = 0;
    
//     for(let i = 0; i < t.length - p.length + 1; i++){
//         const slicedT = t.slice(i, i + p.length);
//         const numberT = Number(slicedT);
        
//         if(numberT <= numberP){
//             count += 1;
//         }
//     }
    
//     return count;
// }

// 내 풀이

function solution(t, p) {
    var answer = 0;
    let i = 0;
    let pLen = p.length;
    while(true){
        let num = t.slice(i, pLen);
        if(num <= Number(p)) answer++;
        i++;
        pLen++;
        if(pLen === t.length + 1) break;
    }
    return answer;
}