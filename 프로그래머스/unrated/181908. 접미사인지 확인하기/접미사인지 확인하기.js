function solution(my_string, is_suffix) {
    var answer = 0;
    for(let i=my_string.length; i>=0; i--){
        console.log(my_string.slice(i, ))
        if(my_string.slice(i, ) === is_suffix){
            answer += 1;
            break;
        } 
    }
    return answer;
}