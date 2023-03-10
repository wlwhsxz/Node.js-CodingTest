function solution(n) {
    var answer = 0;
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return lcm(6, n) / 6;
}