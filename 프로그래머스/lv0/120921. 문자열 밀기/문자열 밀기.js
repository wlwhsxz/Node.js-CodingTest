function solution(A, B) {
    var answer = 0;
    if(A === B) return answer;
    A = A.split('')
    console.log(B)
    let arr = ''
    
    for(let i of A){
        A.unshift(A.pop())
        answer++
        if(A.join('') === B) return answer
    }
    return -1
}