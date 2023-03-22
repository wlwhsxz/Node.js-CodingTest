function solution(s){
    let pNum = 0;
    let yNum = 0;
    s = s.toLowerCase();
    
    for(let i of s){
        if(i === 'p') pNum++;
        if(i === 'y') yNum++;
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return pNum === yNum ? true : false;
}