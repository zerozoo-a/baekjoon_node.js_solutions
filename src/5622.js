const input = require("fs")
  .readFileSync("../dev/5622/stdin")
  .toString()
  .trim()
  .split("");

/**
 * @param {string[]} input
 * @return {void}
 */
function solution(input) {
  const map = new Map();
  map.set(3, ["A", "B", "C"]);
  map.set(4, ["D", "E", "F"]);
  map.set(5, ["G", "H", "I"]);
  map.set(6, ["J", "K", "L"]);
  map.set(7, ["M", "N", "O"]);
  map.set(8, ["P", "Q", "R", "S"]);
  map.set(9, ["T", "U", "V"]);
  map.set(10, ["W", "X", "Y", "Z"]);

  let result = 0;

  for (let i = 3; i < 11; i++) {
    /** @type {string[]} */
    const target = map.get(i);

    for (let j = 0; j < target.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (input[k] === target[j]) {
          result += i;
        }
      }
    }
  }
  console.log(result);
}
solution(input);
