const input = require("fs").readFileSync("../dev/1110/stdin").toString();
/** @param {number} input*/
if (+input === 0) {
  console.log(1);
  return;
}
function solution(input) {
  const save = input;
  let cnt = 0;
  if (input < 10) {
    input = input * 10 + input;
    cnt++;
  }

  while (true) {
    let left = ~~(input / 10);
    let right = input % 10;
    let sum = left + right;
    input = right * 10 + (sum % 10);
    cnt++;
    if (input === save) {
      console.log(cnt);
      break;
    }
  }
}
solution(+input);
