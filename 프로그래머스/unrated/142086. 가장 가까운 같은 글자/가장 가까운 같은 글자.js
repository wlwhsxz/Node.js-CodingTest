function solution(s) {
    var answer = [];
    let arr = []
    s = s.split('');
    
    s.forEach((v, i) => {
        if(!arr.includes(v)) {
            answer.push(-1)
        } else {
            let closestIdx = arr.lastIndexOf(v);
            answer.push(i - closestIdx);
        }
        arr.push(v);
    })
    
    return answer;
}

//