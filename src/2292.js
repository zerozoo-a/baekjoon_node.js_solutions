// const input = require("fs").readFileSync("../dev/2292/stdin").toString().trim();

// /**
//  * @param {number} input
//  * @return {void}
//  */
// function solution(input) {
//   console.log(input);
//   if (input === 1) {
//     console.log(0);
//     return;
//   }
//   let a = 1;
//   let i = 1;

//   while (a < input) {
//     if (6 * i + a > input) {
//       i++;
//       break;
//     } else {
//       a = 6 * i + a;
//       i++;
//     }
//   }
//   console.log("a", a);
//   console.log("i", i);
// }

// solution(Number(input));
const input = require("fs").readFileSync("../dev/2292/stdin").toString().trim();

/**
 * @param {number} input
 * @return {void}
 */
function solution(input) {
  let count = 1;
  let i = 1;
  while (count < input) {
    count = 6 * i + count;
    i++;
  }
  console.log(i);
}

solution(Number(input));
