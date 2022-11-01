const input = require("fs")
  .readFileSync("../dev/4344/stdin")
  .toString()
  .split("\n");

/** @type {number} */
const C = Number(input[0]);

/**
 * @param {string[]} input
 * @return {void}
 */
function solution(input) {
  for (let i = 1; i <= C; i++) {
    /** @type {number[]} */
    const students = input[i].split(" ").map(Number);

    /** @type {number} */
    const N = students[0];

    /** @type {number} */
    let sum = 0;

    for (let j = 1; j <= N; j++) {
      sum += students[j];
    }

    let avg = sum / N;
    let over = 0;

    for (let k = 1; k <= N; k++) {
      if (students[k] > avg) {
        over++;
      }
    }

    const place = 100;
    const result = ((over / N) * place).toFixed(3) + "%";
    console.log(result);
  }
}
solution(input);
