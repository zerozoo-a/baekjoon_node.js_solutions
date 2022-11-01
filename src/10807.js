const input = require("fs")
  .readFileSync("../dev/10807/stdin")
  .toString()
  .split("\n");

/** @param {[string, string,string]} input*/
function solution(input) {
  const [_, arr, v] = input;
  console.log(
    arr
      .split(" ")
      .map((a) => +a)
      .filter((a) => a === +v).length
  );
}

solution(input);
