function solution(n, t) {
    while(t!==0){
        n *= 2;
        t--;
    }
    return n;
}