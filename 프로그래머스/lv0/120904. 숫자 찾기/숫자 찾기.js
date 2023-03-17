function solution(num, k) {
    num = num.toString();
    return num.includes(k) ? num.indexOf(k)+1 : -1;
}