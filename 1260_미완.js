let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

let arr = input[0].split(" ");
let n = Number(arr[0]); //정점의 개수
let startN = Number(arr[2]); //시작 노드

let graph = {}; //그래프

for (let i = 1; i <= n; i++) {
  //그래프 초기화
  graph[i] = [];
}

for (let i = 1; i <= input.length; i++) {
  //그래프 채워 넣기
  let arr = String(input[i]).trim().split(" ");
  for (let j = 1; j <= n; j++) {
    if (arr[0] == j) {
      graph[j].push(Number(arr[1]));
      graph[Number(arr[1])].push(j);
      break;
    }
  }
}

for (let i = 1; i <= n; i++) {
  //그래프 내의 정점 -> 각각 오름차순으로 정렬
  graph[i].sort((a, b) => a - b);
}

const BFS = (graph, startNode) => {
  const visited = []; // 이미 방문한 노드
  let needVisit = []; // 방문하지 않은 노드

  needVisit.push(startNode); // 노드 방문 시작

  while (needVisit.length !== 0) {
    // 방문해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다. -> 첫 요소를 삭제하고, 그 요소를 리턴 -> 새로운 시작 노드가 된다
    if (!visited.includes(node)) {
      // 해당 노드가 방문된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]]; //DFS와 다른점
    }
  }
  return visited;
};

const DFS = (graph, startNode) => {
  const visited = []; // 이미 방문한 노드
  let needVisit = []; // 방문하지 않은 노드

  needVisit.push(startNode); // 노드 방문 시작

  while (needVisit.length !== 0) {
    // 방문해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다. -> 첫 요소를 삭제하고, 그 요소를 리턴 -> 새로운 시작 노드가 된다
    if (!visited.includes(node)) {
      // 해당 노드가 방문된 적 없다면
      visited.push(node);
      needVisit = [...graph[node], ...needVisit]; //DFS와 다른점
    }
  }
  return visited; //방문된 노드의 순서 리턴
};

console.log(DFS(graph, startN));
console.log(BFS(graph, startN));
