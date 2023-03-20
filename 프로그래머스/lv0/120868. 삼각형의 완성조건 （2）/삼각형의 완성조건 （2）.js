function solution(sides) {
    var answer = 0;
    let n = 1;
    sides.push(n);
    let [a,b,c] = sides
    
    let bool = true;
    
    while(bool){
        let max = Math.max(...sides)
        let arr = [];
        if( a === max && (b+c) > a) answer++;
        else if(b === max && (a+c) > b) answer++;  
        else if(c === max && (a+b) > c) answer++;
        
        c++;
        
        c >= a+b ? bool = false : bool;
    }
    return answer;
}