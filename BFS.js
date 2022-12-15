const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};
//그래프 표현

// BFS : 주로 '큐'를 이용해 구현

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

console.log(BFS(graph, "A"));
// ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]
