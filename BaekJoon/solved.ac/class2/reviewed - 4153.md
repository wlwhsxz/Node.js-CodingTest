[백준 4153번: 직각삼각형](https://www.acmicpc.net/problem/4153) - [220807 완료]  

### 후기
- 해당 문제에 대한 수식을 쉽사리 떠올리지 못함
- 정답을 참고하고서도 단번에 캐치하지를 못했음
- 텀을 두고서 다시금 복습을 하니 쉽게 이해가 되었음
- map 함수나 for of 함수 등 다양한 함수 사용법에 익숙해질 필요가 있음
- 지난 학기 수업 때 배운 sort() 함수 사용법에 대한 복습을 다시 진행 함
- 해당 복습 과정을 마치고보니 굉장히 쉬운 난이도의 문제였음을 깨달음

### 해설
- 입력 받은 값을 for문 한번에 처리
- 숫자 문제이다 보니 for 문에서 sort() 함수를 활용하여 오름차순으로 정리
- 각 입력 값을 `for ~ of` 함수를 활용하여 각 line 별 결과값 도출을 진행

### 정답
```
const input = require("fs").readFileSync("4153.txt").toString().split("\n");

for (line of input) {
  let values = line.split(" ").map((value) => parseInt(value));

  if (values[0] === 0) break;
  values.sort((a, b) => {
    return a - b;
  });

  if (values[0] ** 2 + values[1] ** 2 === values[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
```

##### 내가 생각한 코드 - https://chunghyup.tistory.com/64
##### 참고 - https://junghyeonsu.tistory.com/286
