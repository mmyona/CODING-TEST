let fs = require("fs");
let input = fs.readFileSync("test.txt").toString();

const n = Number(input);
let result = 0;

console.log(count(n));

function count(n) {
  if (n === 1) {
    return result;
  }
  if (n % 2 === 0) {
    //짝수
    if (n % 3 === 0) {
      result++;
      count(n / 3);
    } else if ((n - 1) % 3 === 0) {
      result += 2;
      count((n - 1) / 3);
    } else {
      result++;
      count(n / 2);
    }
  } else {
    //홀수
    if (n % 3 === 0) {
      result++;
      count(n / 3);
    } else {
      result++;
      count(n - 1);
    }
  }
  return result;
}
