let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const char = input[1].split(" ");
let answer = "";
let visited = [];
const vowel = ["a", "e", "i", "o", "u"];
char.sort(); //오름차순 정렬

let arr = [];
function dfs(cnt) {
  if (cnt === L) {
    let haveVol = 0;
    vowel.forEach((el) => {
      //최소 한개의 모음을 가져야 함
      if (arr.includes(el)) haveVol++;
    });
    if (haveVol >= 1 && haveVol <= L - 2) answer += arr.join("") + "\n";
  }
  for (let i = 0; i < C; i++) {
    if (visited[i] === true) continue; //중복 방지
    if (char[i] < arr[arr.length - 1]) continue; //조합이기 때문에
    arr.push(char[i]);
    visited[i] = true;
    dfs(cnt + 1);
    arr.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(answer);
