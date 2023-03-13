function solution(my_string) {
    var answer = new Set(my_string);
    answer = [...answer].join('')
    return answer;
}