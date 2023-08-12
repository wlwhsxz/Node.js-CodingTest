function solution(arr) {
    var answer = 1;
    while(true) {
        let bool = []
        
        arr.forEach(v => {
            answer % v === 0 ? bool.push(true) : bool.push(false)
        })
        
        if(!bool.includes(false)) break;
        answer++;
    }
    return answer;
}