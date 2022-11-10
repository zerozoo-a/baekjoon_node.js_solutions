const input = require("fs")
  .readFileSync("../dev/10809/stdin")
  .toString()
  .trim();

/**
 * @param {string} input
 * @return {void}
 */
function solution(input) {
  const alphabet = Array.from(Array(26))
    .map((_, i) => i + 97)
    .map((a) => String.fromCharCode(a));

  const map = new Map();
  alphabet.forEach((a, i) => map.set(a, i));

  const result = Array.from(Array(26)).map((_) => -1);

  for (let i = 0; i < input.length; i++) {
    const index = map.get(input[i]); // b => 1
    result[index] === -1 ? (result[index] = i) : null;
  }

  console.log(result.join(" "));
}

solution(input);
