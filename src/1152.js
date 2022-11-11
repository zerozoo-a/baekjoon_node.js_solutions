const input = require("fs").readFileSync("../dev/1152/stdin").toString().trim();

/**
 * @param {string} input
 * @return {void}
 */
function solution(input) {
  if (input.length === 0) {
    console.log(0);
    return;
  }

  console.log(input.split(" ").length);
}

solution(input);
