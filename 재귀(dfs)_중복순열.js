let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[0].split(" ");
let N = Number(arr[0]); //노드 개수
let M = Number(arr[1]); //수열로 선택할 노드 개수
arr = input[1].split(" "); //주어진 배열
arr.sort((a, b) => a - b); //오름차순 정렬

const visited = new Array(N);
let output = []; //방문한 노드 배열
let result = ""; //출력할 문자열

function dfs(cnt) {
  if (cnt === M) {
    //모든 노드를 방문했을 때
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    //if (visited[i] === true) continue;
    //if (i + 1 < output[output.length - 1]) continue; //조합
    visited[i] = true; //방문
    output.push(arr[i]); //배열의 수를 push
    dfs(cnt + 1);
    output.pop(); //depth의 끝까지 진행하기 위해 마지막 값을 pop()
    visited[i] = false; //해당 방문은 false로 변경
  }
}

dfs(0);
console.log(result.trim());
