const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
const { log } = console;

let list;
rl.on("line", (line) => ((list = line), rl.close()));
rl.on("close", () => {
  solution(list);
});

function solution(list) {
  const [a, b, c] = list.split(" ").map((a) => +a);
  log((a + b) % c);
  log(((a % c) + (b % c)) % c);
  log((a * b) % c);
  log(((a % c) * (b % c)) % c);
}
