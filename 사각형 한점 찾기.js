function solution(v) {
  var x = [];
  var y = [];

  v.forEach((el) => {
    x.push(el[0]);
    y.push(el[1]);
  });

  x = [...new Set(x)];
  y = [...new Set(y)];

  var x1 = [x[0], y[0]];
  var x2 = [x[0], y[1]];
  var x3 = [x[1], y[0]];
  var x4 = [x[1], y[1]];

  for (let i = 0; i < 3; i++) {
    if (v[i][0] === x1[0] && v[i][1] === x1[1]) x1 = [];
    else if (v[i][0] === x2[0] && v[i][1] === x2[1]) x2 = [];
    else if (v[i][0] === x3[0] && v[i][1] === x3[1]) x3 = [];
    else if (v[i][0] === x4[0] && v[i][1] === x4[1]) x4 = [];
  }

  var xx = [x1, x2, x3, x4];
  var result = xx.filter((el) => {
    return el.length !== 0;
  });
  return result[0];
}

console.log(
  solution([
    [1, 4],
    [3, 10],
    [3, 4],
  ])
);
