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
//그래프 구현 (구조체)

// DFS : 주로 '스택/재귀 함수'를 이용해 구현

const DFS = (graph, startNode) => {
  const visited = []; // 방문을 마친 노드들
  let needVisit = []; // 방문해야할 노드들

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
  return visited;
};

console.log(DFS(graph, "A"));
// ["A", "B", "D", "E", "F", "C", "G", "H", "I", "J"]
