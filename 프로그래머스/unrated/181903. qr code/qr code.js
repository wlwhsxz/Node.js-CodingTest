function solution(q, r, code) {
    var answer = '';
    for(let i in code){
        i = +i;
        if(i%q === r) answer += code[i]
    }
    return answer;
}