let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split(" ");

let n = Number(input[0]); //정점 개수
let m = Number(input[1]);
let arr = []; //자연수의 배열
for (let i = 1; i <= n; i++) arr.push(i);

let graph = {}; //그래프
for (let i = 1; i <= n; i++) {
  //그래프 초기화
  graph[i] = [];
}
for (let i = 1; i <= n; i++) {
  //그래프 채워 넣기 (자기 자신 제외)
  for (let j = 1; j <= n; j++) {
    if (i !== j) graph[i].push(j);
  }
}

const DFS = (graph, startNode) => {
  let visited = []; // 방문을 마친 노드들
  let needVisit = []; // 방문해야할 노드들
  let result = [];

  needVisit.push(startNode); // 노드 방문 시작 (시작 노드를 방문)

  while (needVisit.length !== 0) {
    // 방문해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 방문된 적 없다면
      visited.push(node);
      needVisit = [...graph[node], ...needVisit]; //BFS와 다른점
    }
  }
  return result;
};

let result = [];

function dfs(visited, needVisit) {
  while (visited.length !== m) {
    // 방문해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 방문된 적 없다면
      visited.push(node);
      needVisit = [...graph[node], ...needVisit]; //BFS와 다른점
    }
  }
  result.push(needVisit.join(""));
  needVisit.push(visited.pop());
  dfs(visited, needVisit);
}

for (let i = 1; i <= n; i++) {
  let visited = []; // 방문을 마친 노드들
  let needVisit = []; // 방문해야할 노드들
  needVisit.push(String(i));

  dfs(visited, needVisit);
}
