const input = require("fs")
  .readFileSync("../dev/1712/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

/**
 * @param {[number, number, number]} input
 * @return {void}
 */
function solution(input) {
  const [infra, cost, price] = input;
  if (cost >= price) {
    console.log(-1);
    return;
  }

  /**@type {number} */
  const margin = ~~(price - cost);
  /**@type {number} */
  const minCondition = ~~(infra / margin);

  console.log(minCondition + 1);
}

solution(input);
