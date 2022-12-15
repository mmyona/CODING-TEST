const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N, M, k] = input[0];

let pad = []; //격자판
for (let i = 1; i <= N; i++) pad.push(input[i]);
let answer = []; //탐색을 마친 결과값들을 저장할 배열

let visited = new Array(N).fill(0).map(() => new Array(M));
let x = [],
  y = [];
let stop;

function sequence(arr, cnt) {
  if (cnt == k) {
    let sum = 0;
    arr.forEach((el) => (sum += el));
    answer.push(sum);
  } else {
    for (let i = x[x.length - 1]; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (visited[i][j] === true) continue; //중복 케어
        for (let k = 0; k < x.length; k++) {
          stop = false;
          if (Math.abs(x[k] - i) === 0 && Math.abs(y[k] - j) === 1) {
            stop = true;
            break;
          } else if (Math.abs(x[k] - i) === 1 && Math.abs(y[k] - j) === 0) {
            stop = true;
            break;
          }
        }
        if (stop) continue;
        arr.push(pad[i][j]);
        visited[i][j] = true;
        x.push(i), y.push(j);
        sequence(arr, cnt + 1); //재귀
        arr.pop();
        x.pop(), y.pop();
        visited[i][j] = false;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited = new Array(N).fill(0).map(() => new Array(M));
    (x = []), (y = []);
    visited[i][j] = true;
    x.push(i), y.push(j);
    sequence([pad[i][j]], 1);
  }
}

console.log(Math.max(...answer));
