function solution(rank, attendance) {
    let answer = 0;
    let arr = [];
    
    for(let a=0; a<3; a++) {
        let min = 100;
        rank.forEach((v, i) => {
            if(v < min && attendance[i] && !arr.includes(i)) {
                min = v;
            }
        })
        arr.push(rank.indexOf(min));
    }
    answer = arr[0] * 10000 + arr[1] * 100 + arr[2];
    
    return answer;
}

// rank 순으로 3등 까지 뽑기 
// attendance에서 false는 제외
// 최종으로 뽑힌 번호 a, b, c에 대해 10000 x a + 100 x b + c 리턴