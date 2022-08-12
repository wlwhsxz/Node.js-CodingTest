[백준 10250번: ACM호텔](https://www.acmicpc.net/problem/10250) - [220812 첫 시도]

### 후기
- split(), map 의 return 값에 대한 이해도 아직 완벽하지 못한 상태이다.
- [이곳을 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)할 것!
- 해당 문제는 풀이가 다양하지 않고 거의 비슷하게 나타난다

### 해설
- 해당 풀이는 답을 구하는 과정에서 방의 숫자는 무관하다
- 층수를 비교하며 반복문을 진행, 거기에 따라 방의 번호에 +1씩
- H와 비교하여 10이하의 룸넘버 일 경우, 0을 중간에 넣어 출력

### 답안
```
const input = require("fs")
  .readFileSync("10250.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  let newInput = input[i].split(" ");
  let H = parseInt(newInput.shift());
  newInput.shift();
  let N = parseInt(newInput.shift());
  let roomNum = 1;

  while (N > H) {
    roomNum++;
    N -= H;
  }
  if (roomNum < 10) {
    console.log(`${N}0${roomNum}`);
  } else {
    console.log(`${N}${roomNum}`);
  }
}
```

### 참고할만한 답안 - [출처](https://cheri.tistory.com/151)
```
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function Checkin(Height, Number){
const H = parseInt(Height)
let N = parseInt(Number) 
let W = 0
while (N > 0) {
    N -= H
    W++
}
N += H
console.log(N+"" + (W<10 ? "0" + W : W))
}

for(i= 1; i <= input[0]; i++){
    const Case = input[i].split(' ').map(ele=>parseInt(ele));
    Checkin(Case[0], Case[2])
}
```
