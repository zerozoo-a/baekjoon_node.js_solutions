require("fs")
  .readFileSync("../dev/10952/stdin")
  .toString()
  .split("\n")
  .map(([a, _, b]) => {
    const sum = +a + +b;
    if (sum > 0) {
      console.log(sum);
    }
  });
