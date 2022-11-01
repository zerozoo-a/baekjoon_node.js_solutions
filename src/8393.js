/**
 * 문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.

 */

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;

rl.on(`line`, (line) => {
  if (line === "exit") {
    rl.close();
  }
  input = line;
});

rl.on(`close`, () => {
  solution(input);
});

/** @param {} input*/
function solution(input) {
  console.log([...seq(+input)].reduce((a, b) => a + b));
}

/**
 * @Param {number} n
 */
function* seq(n = Infinity) {
  let i = 1;
  while (i <= n) {
    yield i++;
  }
}
