// function solution(want, number, discount) {
//     var answer = 0;
//     let obj = {};
//     let sum = number.reduce((a, b) => a+b)
    
//     want.forEach((_, i) => {
//         obj[want[i]] = number[i];
//     })
    
//     console.log(obj)
    
//     want.forEach((_, i) => {
//         let sortedDiscount = discount.slice(i, i+sum).sort();
//         let sortedWant = want.slice().sort();
//         let count = 0;
        
//         // console.log(sortedDiscount, sortedWant)
        
//         sortedDiscount.forEach((_, k) => {
//             if(sortedWant[count] === sortedDiscount[k]) {
//                 obj[sortedWant[count]]--;
//             }
//         })
        
//     })
    
    
//     return answer;
// }

function solution(want, number, discount) {
    let answer = 0;
    const wantSet = {}
    want.forEach((meal,idx)=>{
        wantSet[meal] = number[idx]
    })

    discount.forEach((_,idx)=>{
        const discountTarget = discount.slice(idx,idx + 10)

        const copyWantSet = {...wantSet}
        discountTarget.forEach((meal)=>{
            if(copyWantSet[meal]){
                copyWantSet[meal]--
            }
            if(copyWantSet[meal] === 0){
                delete copyWantSet[meal]
            }
        })
        
        if(Object.keys(copyWantSet).length === 0){
            answer++
        }
    })
    return answer;
}