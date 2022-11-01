const input = require("fs")
  .readFileSync("../dev/2562/stdin")
  .toString()
  .split("\n")
  .map((a) => +a);

/** @param {number[]} input*/
function solution(input) {
  /** @type {number} */
  let max = input[0];
  /** @type {number} */
  let where = 0;

  for (let i = 0; i < 9; i++) {
    if (input[i] > max) {
      max = input[i];
      where = i;
    }
  }
  console.log(`${max}\n${++where}`);
}

solution(input);
