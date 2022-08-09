[백준 2231번: 분해합](https://www.acmicpc.net/problem/2231) - ~~[220807 재시도 실패]~~[220808 완료]

### 후기
- 간단한 문제이지만 수식을 쉽사리 못 떠올린 문제 중 하나
- 입력 받은 값과 출력 값을 잘 활용하자!
- 분해합에 대한 개념을 제대로 이해하질 못해 `let start = N - (String(N).length * 9);` 해당 코드에서 막힘
- 성혁이의 도움으로 분해합에 대한 이해 정진, 문제 해결

### 해설
- 주어진 숫자 N에서 세울 수 있는 수식 -> `N = 정답 - (정답의 각 자릿수의 합)`
- while 문 내에서 구해진 값 M으로 for문을 돌며 sum 구하기
- if문을 통한 비교로 answer 출력

### 참고 답안
```
let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString();
const N = Number(input);
let start = N - (String(N).length * 9); // 길이를 구하기 위해 String 치환
let M = start;
let answer;
while(true){
    M++;
    let sum = M;
    for(let i = 0; i < String(M).length; i++){
        sum = sum + Number(String(M).charAt(i)); // M에서의 문자 i를 반환하여 숫자로 치환
    }
    if(sum === N){
        answer = M;
        break;
    }
    if(M >= N){
        answer = 0;
        break;
    }
}
console.log(answer);
```
##### 출처 - https://nyang-in.tistory.com/214
##### 문제 해결에 큰 도움 - 성혁 & https://mountrivers.github.io/boj2231/
