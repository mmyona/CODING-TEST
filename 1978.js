let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

let max = 0;

for (let i = Math.min(a, b); i >= 1; i--) {
  if (a % i === 0 && b % i === 0) {
    max = i;
    break;
  }
}

console.log(max);
console.log(max * (a / max) * (b / max));
