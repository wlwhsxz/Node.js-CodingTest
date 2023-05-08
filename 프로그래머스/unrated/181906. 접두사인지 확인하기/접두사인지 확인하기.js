function solution(my_string, is_prefix) {
    var answer = 0;
    let prefixes = []
    
    for(let i in my_string) {
        i = Number(i)
        prefixes.push(my_string.slice(0, i))
    }
    
    for(let i of prefixes) {
        if(i === is_prefix){
            answer = 1;
            break;
        }
    }
    
    return answer;
}