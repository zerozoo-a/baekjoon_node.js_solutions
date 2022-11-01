// Q: n이 입력되면 543을 뺸 값을 출력하는 문제입니다.

const { readFileSync: rfs } = require("fs");
const years = rfs("./dev/stdin").toString().trim().split("\n");
years.forEach((year) => console.log(+year - 543));
