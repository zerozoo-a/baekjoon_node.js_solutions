const input = require("fs")
  .readFileSync("../dev/5597/stdin")
  .toString()
  .split("\n")
  .map((a) => +a);

/** @param {number[]} input*/
function solution(input) {
  let a = new Array(31).fill(0);
  for (let i = 0; i < 29; i++) {
    if (input[i] !== undefined) {
      a[input[i]] = input[i];
    }
  }
  for (let i = 1; i < 31; i++) {
    if (a[i] === 0) {
      console.log(i);
    }
  }
}

solution(input);
