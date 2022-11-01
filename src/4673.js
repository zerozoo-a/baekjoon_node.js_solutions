/**
 * @param {number} n
 * @return {void}
 */

const limit = 10_000;
function d() {
  const set = new Set([...seq(limit)]);
  for (let i = 1; i <= limit; i++) {
    set.delete(sub(i));
  }

  let list = "";
  set.forEach((a) => (list += `${a}\n`));
  console.log(list.slice(0, -1));
}

function* seq(start = 1, end = Infinity) {
  if (end === Infinity) {
    end = start;
    start = 1;
  }
  while (start <= end) {
    yield start++;
  }
}

/**
 * @param {number} n
 */
function sub(n) {
  const a = divide(n);
  return a.reduce((a, b) => a + b, 0) + n;
}

/**
 *
 * @param {number} n
 * @return {number[]}
 */
function divide(n) {
  return n.toString().split("").map(Number);
}

d();
