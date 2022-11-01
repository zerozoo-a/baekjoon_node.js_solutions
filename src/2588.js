const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const { log } = console;

let input = [];
rl.on("line", (line) => {
  if (line === "exit") {
    rl.close();
  }

  input.push(line);
});

rl.on("close", () => {
  solution();
});
function solution() {
  const [_first, second] = input;
  const [a, b, c] = second.split("").map((a) => +a);
  const first = +_first;

  log(first * c);
  log(first * b);
  log(first * a);
  log(first * +second);
}
