function solution(my_strings, parts) {
    var answer = '';
    for(let i in my_strings) {
        let start = parts[i][0]
        let end = parts[i][1]
        
        answer += my_strings[i].slice(start, end+1)
    }
    return answer;
}