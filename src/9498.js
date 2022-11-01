const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { log } = console;

let input;
rl.on("line", (line) => {
  input = line;
  rl.close();
});
rl.on(`close`, () => {
  solution(input);
});

/**
 *  @param {number} input*/
function solution(input) {
  if (input >= 90) {
    log("A");
  } else if (input >= 80) {
    log("B");
  } else if (input >= 70) {
    log("C");
  } else if (input >= 60) {
    log("D");
  } else {
    log("F");
  }
}
