function solution(n) {
    let num = 1;
    while(true){
        if(n%num ===1){
            break;
        }
        num++;
    }
    return num;
}