// const input = require("fs")
//   .readFileSync("../dev/2869/stdin")
//   .toString()
//   .split(" ")
//   .map(Number);

// /**
//  * @param {[number, number, number]} input
//  * @return {void}
//  */
// function solution(input) {
//   const [up, down, height] = input;

//   const distance = up - down;
//   /** 최소 올라갈 수 있는 횟수 미끄러지는 부분을 염두하더라도
//    * up = 2, down = 1 일 때 5/2 = 2, 5/(up-down) = 5 이다.
//    * up - down으로 나누는 것보다 up으로 나누는 것이 항상 작기 때문에
//    * 문제에서 제시하는
//    * (1 ≤ down < up ≤ height ≤ 1,000,000,000) 조건에 의해
//    * 어떤 입력값이 오더라도 height / up < height / up - down은 항상 참이다.
//    */
//   let min = ~~(height / up);
//   let count = min;

//   let now = min * distance;
//   while (now + up < height) {
//     now += distance;
//     count++;
//   }
//   console.log(count + 1);
// }
// solution(input);

const input = require("fs")
  .readFileSync("../dev/2869/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

/**
 * @param {[number, number, number]} input
 * @return {void}
 */
function solution(input) {
  const [a, b, v] = input;
  console.log(Math.ceil((v - a) / (a - b)) + 1);
}
solution(input);
