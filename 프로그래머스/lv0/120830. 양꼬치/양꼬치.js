function solution(n, k) {
    var answer = 0;
    
    let service = Math.floor(n/10)
    
    answer = n*12000 + k*2000 - service*2000
    
    return answer;
}