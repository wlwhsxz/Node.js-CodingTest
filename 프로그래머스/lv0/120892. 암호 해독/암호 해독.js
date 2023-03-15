function solution(cipher, code) {
    var cipher = [...cipher];
    let count = 1;
    let answer = [];
    for(let i of cipher){
        if(count % code === 0) answer.push(i);
        count++;
    }
    return answer.join('');
}