function solution(box, n) {
    let answer = 1;
    box = box.map(x=> parseInt(x/n));
    for(let i of box) answer *= i;
    return answer;
}