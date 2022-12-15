let n = 5;

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

console.log(graph);
