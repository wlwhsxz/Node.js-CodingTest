function solution(n) {
    let answer = Array.from(Array(n), () => Array(n).fill(0))
    for(let i in answer){
        for(let j in answer[i]){
            if(i===j)answer[i][j] = 1
        }
    }
    return answer;
}