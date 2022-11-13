const input = require("fs").readFileSync("../dev/2941/stdin").toString().trim();

/**
 * @param {string} input
 * @return {void}
 */
function solution(input) {
  if (input.length === 0) {
    console.log(0);
    return;
  }
  const map = new Map();
  map.set("c=", 1);
  map.set("c-", 1);
  map.set("dz=", 1);
  map.set("d-", 1);
  map.set("lj", 1);
  map.set("nj", 1);
  map.set("s=", 1);
  map.set("z=", 1);

  map.forEach((_, k) => {
    const matched = [...input.matchAll(k)];
    if (matched.length !== 0) {
      for (let j = 0; j < matched.length; j++) {
        input = input.replace(matched[j][0], "_");
      }
    }
  });
  console.log(input.length);
}

solution(input);
