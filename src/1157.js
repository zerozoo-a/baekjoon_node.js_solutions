const input = require("fs")
  .readFileSync("../dev/1157/stdin")
  .toString()
  .trim()
  .toLocaleUpperCase();

/**
 * @param {string} input
 * @return {void}
 */
function solution(input) {
  const map = new Map();
  let max = 0;

  for (const char of input) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
    max = map.get(char) > max ? map.get(char) : max;
  }

  let result = "";

  map.forEach((v, k) => {
    if (v === max) {
      result += k;
    }
  });

  if (result.length >= 2) {
    console.log("?");
  } else {
    console.log(result);
  }
}
solution(input);
