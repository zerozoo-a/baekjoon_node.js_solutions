/**
 * 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.
 * 
 */
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let insert;
rl.on(`line`, (line) => {
  if (line === "exit") {
    rl.close();
  }
  insert = line;
});

rl.on(`close`, () => {
  solution(insert);
});

/** @param {string} input*/
function solution(input) {
  const [a, b, c] = input.split(" ").map((a) => +a);

  if (a == b && a == c) {
    console.log(`${10000 + a * 1000}`);
  } else if (a == b || b == c || c == a) {
    const output = (a) => console.log(`${1000 + a * 100}`);
    if (a == b) {
      output(a);
    } else if (b == c) {
      output(b);
    } else {
      output(c);
    }
  } else {
    const output = (m) => console.log(`${100 * m}`);
    if (a > b && a > c) {
      output(a);
    } else if (b > c && b > a) {
      output(b);
    } else {
      output(c);
    }
  }
}
