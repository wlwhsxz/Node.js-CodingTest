function solution(my_string, m, c) {
    var answer = '';
    let count = c-1;
    
    while(count < my_string.length) {
        answer += my_string[count]
        count += m
    }
    return answer;
}