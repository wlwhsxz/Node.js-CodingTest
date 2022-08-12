[백준 2798번: 블랙잭](https://www.acmicpc.net/problem/2798) - [220809 복습 완료]

### 후기
- 나의 very stupidity를 day by day 느낀다 ^^  
- 참고 블로그의 풀이를 보고서는 알지만, 처음부터 스스로 식을 떠올리는 능력을 기룰 수 있어야한다!  
- 개강 전 일주일 정도 기간을 잡고서 unsolved & review needed 문제들만 다시금 풀어보도록 해야겠다!

### 해설
- `입력값을 각 배열로 잘 나누기`
- `brute force` 문제로, 삼중 for문과 조건문을 이용한 수식`
- `sum 값에 대한 조건식과 break 조건식`

### 답안
```
const input = require("fs")
  .readFileSync("2798.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");
const numArr = input[1].split(" ").map((el) => parseInt(el));

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (i == j || i == k || k == j) continue;

      const sum = numArr[i] + numArr[j] + numArr[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
      if (max == M) break;
    }
  }
}
console.log(max);

```

참고 - https://chunghyup.tistory.com/72  
참고 - [특정 숫자 범위에서 중복을 제외한 랜덤 숫자 뽑는 방법](https://velog.io/@eunjin/Javascript-%ED%8A%B9%EC%A0%95-%EC%88%AB%EC%9E%90-%EB%B2%94%EC%9C%84%EC%97%90%EC%84%9C-%EC%A4%91%EB%B3%B5%EC%9D%84-%EC%A0%9C%EC%99%B8%ED%95%9C-%EB%9E%9C%EB%8D%A4-%EC%88%AB%EC%9E%90-%EB%BD%91%EB%8A%94-%EB%B0%A9%EB%B2%95)
참고 - [조합을 활용한 풀이](https://nyang-in.tistory.com/213) // 뽑아야 되는 카드 개수가 늘어날수록 for문을 도는 런타임이 늘어나므로 조합이 유리해짐
