const input = require("fs")
  .readFileSync("../dev/1316/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * @param {string[]} input
 * @return {void}
 */
function solution(input) {
  const [N, ...strings] = input;

  let count = 0;

  for (let i = 0; i < N; i++) {
    const map = new Map();
    let current = "";

    for (let j = 0; j < strings[i].length; j++) {
      const char = strings[i][j];

      if (map.has(char) && current === char) {
        map.set(char, map.get(char) + 1);
      } else if (map.has(char) && current !== char) {
        count++;
        break;
      } else {
        map.set(char, 1);
      }
      current = char;
    }
  }

  console.log(N - count);
}

solution(input);
