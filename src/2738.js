const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line.toString());
}).on("close", function () {
  const number = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  const all = input.map((el) => el.split(" ").map((el) => Number(el)));

  const A = all.splice(0, number[0]);
  const B = [...all];

  const result = [];
  for (let i = 0; i < A.length; i++) {
    let temp = [];
    for (let j = 0; j < A.length; j++) {
      const v = A[i][j] + B[i][j];
      temp.push(v);
    }
    result.push(temp);
  }

  const value = [];

  result.forEach((el) => {
    value.push(el.join(" "));
  });

  console.log(value.join("\n"));
  process.exit();
});
