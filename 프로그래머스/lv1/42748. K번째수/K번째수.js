function solution(array, commands) {
    var answer = [];
    for(let i in commands){
            const sortedArr = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b)
            answer.push(sortedArr[commands[i][2]-1])
    }
    return answer;
}