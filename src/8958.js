const input = require("fs")
  .readFileSync("../dev/8958/stdin")
  .toString()
  .split("\n");

/**
 * @param {string[]} input
 * @return {void}
 */
function solution(input) {
  //   const [N, ...OX] = input;
  const N = Number(input[0]) + 1;

  for (let i = 1; i < N; i++) {
    /** @type {string} */
    const round = input[i];

    /** @type {number} */
    let cnt = 0;

    /** @type {number} */
    let sum = 0;

    for (let j = 0; j < round.length; j++) {
      if (round[j] === "O") {
        cnt++;
        sum += cnt;
      } else {
        cnt = 0;
      }
    }
    console.log(sum);
  }
}

solution(input);
