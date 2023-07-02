function solution(arr) {
    let n = 0;
    let m = 0;
    
    while(2**n < arr.length){
        n++;
        m = n;
    }
    
    while(2**m !== arr.length){
        arr.push(0)
    }
    
    return arr;
}