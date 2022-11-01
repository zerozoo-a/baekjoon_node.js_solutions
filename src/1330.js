const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
const { log } = console;

let inputs;
rl.on("line", (line) => ((inputs = line), rl.close()));
rl.on("close", () => {
  solution(inputs);
});

/**
 *
 * @param {string} input
 */
function solution(input) {
  const [a, b] = input.split(" ").map((a) => +a);
  if (a > b) {
    log(">");
  } else if (a < b) {
    log("<");
  } else {
    log("==");
  }
}
