let input = require("fs")
  .readFileSync("../dev/11021/stdin")
  .toString()
  .split("\n");

/** @param {string[]} input*/
function solution(input) {
  const [T, ...nums] = input;
  let output = "";
  for (let i = 0; i < T; i++) {
    output += nums[i]
      .split(" ")
      .reduce((acc, cur) => `Case #${i + 1}: ${+cur + +acc}\n`);
  }
  console.log(output);
}
solution(input);
