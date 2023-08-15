function solution(name, yearning, photo) {
    var answer = [];
    
    photo.forEach(v => {
        let idx = 0;
        let num = 0;
        
        v.forEach(x => {
            if(name.includes(x)) {
                idx = name.indexOf(x)        
                num += yearning[idx];
            }
        })
        answer.push(num)
    })
    
    return answer;
}