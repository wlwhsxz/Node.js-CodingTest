function solution(numbers, direction) {
    let n = 0;
    
    switch(direction) {
        case 'right' : 
            n = numbers.pop();
            numbers.unshift(n);
            break;
        case 'left' :
            n = numbers.shift();
            numbers.push(n);
            break;
    }
    return numbers;
}