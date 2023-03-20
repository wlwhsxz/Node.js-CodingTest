function solution(my_string) {
    my_string = my_string.split(' ');
    console.log(my_string);
    let answer = Number(my_string[0]);
    for(let i=0; i<my_string.length; i++){
        if(my_string[i] === '+') answer += Number(my_string[++i]);
        if(my_string[i] === '-') answer -= Number(my_string[++i]);
    }
    return answer;
}