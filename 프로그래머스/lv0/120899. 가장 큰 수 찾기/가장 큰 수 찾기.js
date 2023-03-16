function solution(array) {
    var answer = [];
    console.log(typeof array)
    let max = Math.max(...array);
    for(let i in array){
        if(array[i] === max) answer.push(array[i], Number(i));
    }
    return answer;
}