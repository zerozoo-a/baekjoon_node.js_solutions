var input = require("fs")
  .readFileSync("../dev/2563/stdin")
  .toString()
  .split("\n")
  .splice(1);

input.pop();
/** @type {number[][]} */
var papers = input.map((e) => e.split(" ").map(Number));
/** @type {Set<string>} */
var set = new Set();
papers.map((paper) => {
  var [left, height] = paper;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (!set.has(`${left + i}, ${height + j}`)) {
        set.add(`${left + i}, ${height + j}`);
      }
    }
  }
});
console.log(set.size);
