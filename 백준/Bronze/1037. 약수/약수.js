let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.shift();
input = input.toString().split(" ").map(Number);
input.sort((a, b) => {
  return a - b;
});

const answer = input[input.length - 1] * input[0];

console.log(answer);
