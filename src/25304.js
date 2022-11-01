const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on(`line`, (line) => {
  if (line === "exit") {
    rl.close();
  }
  input.push(line);
});
rl.on(`close`, () => {
  solution(input);
});
/** @param {string[]} input*/
function solution(input) {
  const [total, _, ...detail] = input;
  const detailTotal = detail
    .map((a) => a.split(" ").reduce((acc, cur) => +acc * +cur))
    .reduce((a, b) => a + b);
  if (+total === detailTotal) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
