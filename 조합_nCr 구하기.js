function getCombinations(a, b) {
  //조합의 수를 구하는 함수
  if (b === 0) return 1;
  else if (a === b) return 1;
  else if (b === 1) return a;

  if (b > a / 2) b = a - b;

  var answer = 1;

  for (let i = 0; i < b; i++) answer *= a--;
  for (let i = b; i > 1; i--) answer /= b--;

  return answer;
}
console.log(getCombinations(10, 8));
