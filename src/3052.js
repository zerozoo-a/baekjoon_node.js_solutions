const input = require("fs")
  .readFileSync("../dev/3052/stdin")
  .toString()
  .split("\n")
  .map(Number);

/**
 * @param {number[]} input
 * @return {void}
 */
function solution(input) {
  /** @type {42} */
  const divider = 42;
  /** @type {Set<number>} */
  const set = new Set();

  for (let i = 0; i < 10; i++) {
    set.add(input[i] % divider);
  }
  console.log(set.size);
}

solution(input);
