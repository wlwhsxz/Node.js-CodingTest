function solution(l, r) {
    var answer = [];

    for (let i = l; i <= r; i++) {
        if (i % 5 === 0) {
            let num = i.toString();
            if (!/[1-4]|[6-9]/.test(num)) {
                answer.push(i);
            }
        }
    }

    return answer.length !== 0 ? answer : [-1];
}
