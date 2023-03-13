function solution(my_string) {
    var answer = '';
    let vowel = ['a','e','i','o','u'];
    my_string = my_string.split('');
    for(let i of my_string){
        !vowel.includes(i) ? answer += i : answer
    }
    return answer;
}