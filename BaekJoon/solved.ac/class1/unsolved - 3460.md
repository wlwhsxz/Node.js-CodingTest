[백준 3460번: 이진수](https://www.acmicpc.net/problem/3460)  

![image](https://user-images.githubusercontent.com/49461207/179282302-c564f9d5-e432-4d28-aadf-5da6c072a7d4.png)  


### 해설
`toString(2), reverse(), join('') 등 다양한 함수들을 활용`  

### 답안
```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input[0];
const n = input[1];
let output = "";

const bin = n.toString(2).trim().split('').reverse().join('');

for(let i = 0; i < bin.length; i++) {
    if(bin[i] === '1') {
        output += `${i} `;
    }
    else {
        continue;
    }
}

for(let i = 0; i < T; i++) {
    console.log(output);
}
```
