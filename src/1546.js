const input = require("fs")
  .readFileSync("../dev/1546/stdin")
  .toString()
  .split("\n");

/**
 * @param {[string, string]} input
 * @return {void}
 */
function solution(input) {
  /** @type {number} */
  const N = Number(input[0]);
  /** @type {number[]} */
  const points = input[1].split(" ").map(Number);
  /** @type {number} */
  const M = Math.max(...points);

  /** @type {number} */
  const result =
    points.map((point) => (point / M) * 100).reduce((acc, cur) => acc + cur) /
    N;
  console.log(result.toFixed(2));
}
solution(input);
