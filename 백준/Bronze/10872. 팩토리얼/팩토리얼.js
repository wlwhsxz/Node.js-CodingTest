const input = require("fs").readFileSync("dev/stdin").toString().trim();

let sum = 1;
for (let i = 1; i <= input; i++) {
  sum *= i;
}
console.log(input === 0 ? console.log(1) : sum);
