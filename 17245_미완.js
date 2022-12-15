let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  let n = Number(input[i]);
  console.log(g(n));
}

function g(x) {
  let result = 0;
  for (let i = 1; i <= x; i++) result += parseInt(x / i) * i;
  return result;
}
