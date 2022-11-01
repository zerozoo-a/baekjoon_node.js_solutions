const input = require("fs")
  .readFileSync("../dev/10871/stdin")
  .toString()
  .split("\n");

/** @param {[string,string]} input*/
function solution(input) {
  const [XN, iter] = input;
  const [_, N] = XN.split(" ");
  let res = "";
  iter
    .split(" ")
    .map((n) => +n)
    .filter((n) => n < N)
    .forEach((a) => (res += `${a} `));

  console.log(res);
}

solution(input);
