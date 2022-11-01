const input = require("fs")
  .readFileSync("../dev/2438/stdin")
  .toString()
  .split(" ");
/** @param {number} input*/
function solution(input) {
  for (let i = 1; i < input + 1; i++) {
    console.log("*".repeat(i));
  }
}
solution(+input);
