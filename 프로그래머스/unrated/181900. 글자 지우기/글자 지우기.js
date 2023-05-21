function solution(my_string, indices) {
    var answer = '';
    
    for(let i in my_string){
        let count = 0;
        i = Number(i)
        for(let j in indices){
            if(indices[j] === i) {
                count++
            }
        }
        if(count === 0) answer += my_string[i]
    }
    return answer
}