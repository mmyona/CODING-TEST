// 1,2,3 더하기

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  console.log(sum(Number(input[i].trim())));
}

function sum(n) {
  const arr = []; //수열을 저장할 배열
  arr.push(0, 1, 2, 4);
  for (let i = 4; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n];
}
