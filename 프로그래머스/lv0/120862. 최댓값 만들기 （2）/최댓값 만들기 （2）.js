function solution(numbers) {
    var answer = 0;
    let arr = [];
    
    for(let i=0; i<numbers.length-1; i++){        
        for(let j=i+1; j<numbers.length; j++){
            arr.push(numbers[i] * numbers[j])
        }
    }
    arr.sort((a,b)=>{return a-b;})
    
    return arr[arr.length-1];
}