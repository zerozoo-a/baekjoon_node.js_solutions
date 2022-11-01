// 잃어버린 체스말의 개수를 세는 문제입니다.
// 예시로 말이 총 4개 있는데 한 개만 있다고 가정하면 (킹: 1, 퀸: 1, 룩: 2)
// input: 1 0 0 -> output: 0 1 2

const { readFileSync: rfs } = require("fs");
const found = rfs("./dev/3003/stdin", "utf8")
  .trim()
  .split(" ")
  .map((a) => +a);
const all = [1, 1, 2, 2, 2, 8];
const result = all.map((a, i) => a - found[i]).join(" ");
console.log(result);
