const INF = Infinity;
const arr = Array.from(Array(N), () => new Array(N)); //인접행렬
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) arr[i][j] = 0;
    else arr[i][j] = INF;
  }
}

//두 노드가 연결하는 도로가 여러 개인 경우, 최소인 경우만 저장
for (let i = 0; i < [...road].length; i++) {
  if (arr[road[i][0] - 1][road[i][1] - 1] === INF)
    arr[road[i][0] - 1][road[i][1] - 1] = road[i][2];
  else
    arr[road[i][0] - 1][road[i][1] - 1] = Math.min(
      road[i][2],
      arr[road[i][0] - 1][road[i][1] - 1]
    );
  if (arr[road[i][1] - 1][road[i][0] - 1] === INF)
    arr[road[i][1] - 1][road[i][0] - 1] = road[i][2];
  else
    arr[road[i][1] - 1][road[i][0] - 1] = Math.min(
      road[i][2],
      arr[road[i][1] - 1][road[i][0] - 1]
    );
}

console.log(arr);

const isVisit = new Array(5).fill(false); //방문 여부 저장

const getMin = function (vertex) {
  let min = INF;
  let idx = 0;
  for (let i = 0; i < vertex.length; i++) {
    if (min > vertex[i] && !isVisit[i]) {
      min = vertex[i];
      idx = i;
    }
  }
  return idx; //다음 방문할 노드 노드 (거리가 가장 가까운)
};

const dist = function (start) {
  let v = arr[start - 1];
  let count = 0;
  let end = v.length;
  let min = 0; //움직인 거리의 합
  let startV = v;
  isVisit[start - 1] = true; //자기 자신은 이미 방문한 것으로 친다

  while (count < end) {
    const idx = getMin(startV);
    min += startV[idx];
    const next = arr[idx]; //다음 방문할 노드
    for (let i = 0; i < v.length; i++) {
      //최소 거리로 업데이트
      if (v[i] > next[i] + min && !isVisit[i]) v[i] = next[i] + min;
    }
    startV = arr[idx];
    isVisit[idx] = true;
    count++;
  }
  return v;
};

console.log(dist(1));
