function solution(n,a,b){
    var answer = 0;

    while(a !== b){
        console.log(a,b)
        a = Math.round(a/2);
        b = Math.round(b/2);
        console.log('Math.round() : ', a, b)
        answer ++
    }

    return answer;
}