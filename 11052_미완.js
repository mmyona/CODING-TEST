let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

const n = Number(input[0]);
const pi = input[1].trim().split(" ");
let max = 0;
//Number(pi[n - 1]);

let arr = [];

for (let i = 1; i < n; i++) {
  arr.push({ index: i, ratio: Number(pi[i - 1]) });
}
arr.sort((a, b) => b.ratio - a.ratio); //내림차순으로 정렬

function maxPay(Nsum, Psum) {
  //카드 개수, 지불해야 하는 금액
  if (Nsum === n) return Psum, console.log("1");
  else if (n - Nsum < n) {
    arr.forEach((el) => {
      if (n - Nsum === el.index) {
        return Psum + el.ratio, console.log("2");
      }
    });
  } else {
    maxPay(Nsum + arr[0].index, Psum + arr[0].ratio);
  }
  return Nsum, Psum;
}

console.log(Math.max(maxPay(arr[0].index, arr[0].ratio), max));
