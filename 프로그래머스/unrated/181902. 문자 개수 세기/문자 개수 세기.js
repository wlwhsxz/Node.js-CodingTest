function solution(my_string) {
    var answer = [];
    let alphabet = Array(52).fill(0);
    
    
    for(let i of my_string){
        let idx = 0;
        if(i.match(/[A-Z]/g)) {
            idx = i.charCodeAt() - 65;
            alphabet[idx] += 1
        }
        if(i.match(/[a-z]/g)) {
            idx = i.charCodeAt() - 71;
            alphabet[idx] += 1
        }
    }
    return alphabet;
}