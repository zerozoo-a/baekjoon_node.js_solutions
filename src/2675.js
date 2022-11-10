const input = require("fs")
  .readFileSync("../dev/2675/stdin")
  .toString()
  .split("\n");

/**
 * @param {string[]} input
 * @return {void}
 */
function solution(input) {
  const C = input.shift();

  for (let i = 0; i < C; i++) {
    const [c, string] = input[i].split(" ");

    let temp = "";
    for (let j = 0; j < string.length; j++) {
      for (let k = 0; k < c; k++) {
        temp += string[j];
      }
    }
    console.log(temp);
  }
}

solution(input);
