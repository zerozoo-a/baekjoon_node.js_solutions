const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
rl.on(`line`, (line) => {
  if (line === "exit") {
    rl.close();
  }
  input = line;
});

rl.on(`close`, () => {
  solution(+input);
});

/** @param {number} input*/
function solution(input) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
}
