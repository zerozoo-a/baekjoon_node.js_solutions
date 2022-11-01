const input = +require("fs").readFileSync("../dev/2438/stdin").toString();
let i = 0;
while (input > i) {
  console.log(" ".repeat(input - ++i) + "*".repeat(i));
}
