const input = require("fs")
  .readFileSync("../dev/10250/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * @param {string[]} input
 * @return {void}
 */
function solution([t, ...input]) {
  const T = Number(t);
  const NS = [];
  for (let i = 0; i < T; i++) {
    NS.push(input[i].split(" ").map(Number));
  }

  NS.forEach(([H, W, N]) => {
    findNextRoom(H, N);
  });
}

/**
 *
 * @param {number} H
 * @param {number} N
 * @returns {number}
 */
function findNextRoom(H, N) {
  const head = N % H === 0 ? H : N % H;
  const tail = N % H === 0 ? ~~(N / H) : ~~(N / H) + 1;
  const _tail = tail.toString().length === 1 ? `0${tail}` : tail;
  const result = `${head}${_tail}`;
  console.log(result);
}

solution(input);
