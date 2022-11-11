const input = require("fs")
  .readFileSync("../dev/2908/stdin")
  .toString()
  .trim()
  .split(" ");

/**
 * @param {[string, string]} input
 * @return {void}
 */
function solution(input) {
  const [a, b] = input;
  const A = reverseString(a).map(Number).join("");
  const B = reverseString(b).map(Number).join("");
  A > B ? console.log(A) : console.log(B);
}
/**
 * @param {string}  string
 * @param {number}  l
 * @returns {string[]}
 */
function reverseString(string, l = string.length - 1) {
  const str = string.split("");
  for (let i = 0; i < l / 2; i++) {
    [str[i], str[l - i]] = [str[l - i], str[i]];
  }
  return str;
}

solution(input);
