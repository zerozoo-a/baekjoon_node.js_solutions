const { readFileSync: rfs } = require("fs");
const ids = rfs("./dev/10926/stdin").toString().trim().split("\n");
ids.forEach((id) => console.log(`${id}??!`));
