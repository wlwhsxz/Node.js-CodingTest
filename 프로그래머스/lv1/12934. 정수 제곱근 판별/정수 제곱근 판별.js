function solution(n) {  
    return Math.floor(Math.sqrt(n))**2 === n ? (Math.floor(Math.sqrt(n))+1)**2 : -1;
}