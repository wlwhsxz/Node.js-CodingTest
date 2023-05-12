function solution(binomial) {
    var answer = 0;
    let [a,op,b] = binomial.split(' ')
    a = Number(a)
    b = Number(b)
    switch(op) {
        case '+' :
            answer = a+b;
            break;            
        case '-' :
            answer = a-b;
                break;            

            
        case '*' :
            answer = a*b;
               break;            

            
    }
    return answer;
}