const input = require("fs")
  .readFileSync("../dev/2775/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const summation = (a, b) => a + b;
/**
 * @param {number[]} input
 * @return {void}
 */
function solution([T, ...input]) {
  const testCase = [];
  let i, j, q;
  for (i = 0; i < T; i++) {
    const temp = [];
    for (j = 0; j < 2; j++) {
      temp.push(input[j]);
    }
    testCase.push(temp);
    input = input.slice(2);
  }
  for (q = 0; q < T; q++) {
    const [k, n] = testCase[q];
    if (k === 0) {
      console.log(n);
      return;
    }

    const apt = getApt(k, n)[k - 1].reduce(summation);
    console.log(apt);
  }
}

/**
 *
 * @param {number} k
 * @param {number} n
 * @returns {number[][]}
 */
function getApt(k, n) {
  const matrix = [[...new Array(n)].map((_, i) => i + 1)];
  let i, j;
  for (i = 0; i < k - 1; i++) {
    // 층 수
    const temp = [];
    for (j = 0; j < n; j++) {
      // 호 수
      const sum = matrix[i].slice(0, j + 1).reduce(summation);
      temp.push(sum);
    }
    matrix.push(temp);
  }
  return matrix;
}

solution(input);
