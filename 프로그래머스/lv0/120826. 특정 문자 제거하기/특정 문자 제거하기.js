function solution(my_string, letter) {
    my_string = my_string.split('');
    let arr = [];
    for(let i of my_string) {
        if(i!==letter) arr.push(i);
    }
    return arr.join('');
}