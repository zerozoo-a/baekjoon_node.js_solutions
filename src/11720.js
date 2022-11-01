const input = require("fs")
  .readFileSync("../dev/11720/stdin")
  .toString()
  .split("\n");

/**
 * @param {string[]} input
 * @return {void}
 */
function solution(input) {
  const [_, numbers] = input;
  const result = numbers
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
  console.log(result);
}

solution(input);
