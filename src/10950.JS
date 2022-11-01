let input = require("fs")
  .readFileSync("../dev/10950/stdin")
  .toString()
  .split("\n");

/** @param {string[]} input*/
function solution(input) {
  const [T, ...nums] = input;
  let output = "";
  for (let i = 0; i < T; i++) {
    output += nums[i].split(" ").reduce((acc, cur) => `${+cur + +acc}\n`);
  }
  console.log(output);
}
solution(input);
