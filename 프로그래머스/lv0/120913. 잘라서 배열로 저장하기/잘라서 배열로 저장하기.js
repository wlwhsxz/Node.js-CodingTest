function solution(my_str, n) {
    var answer = [];
    let count = 0;

    for(let i=0; i<Math.ceil(my_str.length/n); i++){

        answer.push(my_str.substr(count,n));
        count += n;
    }
    return answer;
}