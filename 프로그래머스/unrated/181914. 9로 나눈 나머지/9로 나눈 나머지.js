function solution(number) {
    number = number.split('').map(Number).reduce((a,b)=>a+b)%9
    return number
}