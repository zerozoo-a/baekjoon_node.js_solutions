const input = require("fs")
  .readFileSync("../dev/10818/stdin")
  .toString()
  .split("\n");

/**
 * @param {[string, string]} input
 * @v
 * */
function solution(input) {
  /** @type {number} */
  const n = +input[0];
  /** @type {number[]} */
  const arr = input[1].split(" ").map((a) => +a);

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < n; i++) {
    max > arr[i] ? null : (max = arr[i]);
    min < arr[i] ? null : (min = arr[i]);
  }
  console.log(min, max);
}

solution(input);
