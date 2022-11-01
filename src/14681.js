const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let input = [];

rl.on(`line`, (line) => {
  if (line === "exit") {
    rl.close();
  }
  input.push(+line);
});

rl.on(`close`, () => {
  solution(input);
});

/**
 * @param {number[]} line
 */
function solution(line) {
  const { log } = console;
  const [x, y] = line;

  const isXNegative = isNegative(x);
  const isYNegative = isNegative(y);
  if (isXNegative === false && isYNegative === false) {
    log(1);
  } else if (isXNegative === true && isYNegative === false) {
    log(2);
  } else if (isXNegative === true && isYNegative === true) {
    log(3);
  } else {
    log(4);
  }
}

/**
 * @param {number} number
 * @return {boolean}
 */
function isNegative(number) {
  return 0 > number;
}
