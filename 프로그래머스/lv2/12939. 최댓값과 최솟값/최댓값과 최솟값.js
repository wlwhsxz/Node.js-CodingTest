function solution(s) {
    var answer = '';
    s = s.split(' ').sort((a,b)=> a-b);
    const min = s[0]
    const max = s[s.length-1]
    answer = `${min} ${max}`
    return answer;
}