const input = require("fs")
  .readFileSync("../dev/2566/stdin")
  .toString()
  .split("\n")
  .map((a) => a.split(" ").map(Number));

solution(input);

/**
 * @param {number[][]} input
 * @return {void}
 */
function solution(input) {
  /** @type {number} */
  let max = 0;
  /** @type {number} */
  let x = 0,
    y = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (input[i][j] > max) {
        max = input[i][j];
        x = i;
        y = j;
      }
    }
  }

  console.log(`${max}\n${x + 1} ${y + 1}`);
}
