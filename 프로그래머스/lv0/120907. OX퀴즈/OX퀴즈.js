function solution(quiz) {
    var answer = [];
    for(let i of quiz){
        let v = i.split(' ')
        let sum = Number(v[0]);
        v[1] === '+' ? sum += Number(v[2]) : sum -= Number(v[2]);
        sum === Number(v[4]) ? answer.push('O') : answer.push('X');
    }
    return answer;
}