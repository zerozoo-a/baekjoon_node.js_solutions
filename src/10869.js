const { readFileSync: rfs } = require("fs");
const [a, b] = rfs("./dev/stdin")
  .toString()
  .split(" ")
  .map((a) => +a);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(~~(a / b));
console.log(a % b);
