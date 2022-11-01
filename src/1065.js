const input = require("fs").readFileSync("../dev/1065/stdin").toString();

/**
 * @param {string} input
 * @param {number} memo
 * @return {void}
 */
function solution(input, memo = 0) {
  if (Number(input) < 100) {
    return console.log(Number(input) + memo);
  }

  /** @type {number} */
  const [a, b, c] = input.split("").map(Number);
  /** @type {string} */
  const arg = (Number(input) - 1).toString();

  if ((a + c) / 2 === b) {
    solution(arg, memo + 1);
  } else {
    solution(arg, memo + 0);
  }
}

solution(input);
/**
 * 135 => 1 3 5
 * 5 - 3 = 2
 * 2 - 1 = 1
 * 123 => 1 2 3
 * 3 - 2 = 1
 * 1 - 1 = 0
 * 135 => 1 3 5
 * 5 - 3 = 2
 * 2 - 1 = 1
 *
 * 10 ok d -1
 * 11 ok d 0
 * 12 ok d 1
 * 13 ok d 2
 * ....
 * 20 ok d -2
 *
 * 99까지는 모두 등차수열
 * 100 no
 * 101 no
 * 109 no
 * 110 no
 * 111 ok
 * 112 no
 *
 * 100의 자리 = p
 * 10의 자리 = m
 * 1의 자리 = n
 *
 * 등차가 같거나 등차가 한 자리 더 많은 경우 m - n의 값은 p - m과 같아야 한다.
 */
