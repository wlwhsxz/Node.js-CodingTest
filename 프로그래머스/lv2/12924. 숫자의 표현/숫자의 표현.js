function solution(n) {
    var answer = 0;
    
    for(let i=1; i<n/2; i++){
        let sum = i;
        if(i === n) {
            answer++;
            break;
        }
        for(let j=i+1; j<n/2+1; j++){
            sum += j
            if(sum === n) {
                answer++;
                break;
            } else if(sum > n) break;
        }
       
    }
    return answer+1;
}