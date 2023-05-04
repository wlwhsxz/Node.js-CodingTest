function solution(a, b) {
    a = a.toString();
    b = b.toString();
    let ab = parseInt(a + b)
    let ba = parseInt(b + a)
    
    return ab > ba ? ab : ba
}