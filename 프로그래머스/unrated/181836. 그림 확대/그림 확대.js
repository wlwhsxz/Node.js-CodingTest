function solution(picture, k) {
    var answer = [];
    
    picture.forEach(v => {
        let doubled = "";
        
        for(let i of v) {
            doubled += i.repeat(k);
        }
        
        for(let i=0; i<k; i++){
            answer.push(doubled);
        }
    });
    
    return answer;
}

// 