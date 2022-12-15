function solution(n) {
  sum = 0; //중복 조합의 개수를 세는 변수
  answer = [];
  for (let i = 1; i < 1000; i++) {
    var per = permutation([1, 2, 4], i);
    answer.push(...per);
    sum += per.length;
    if (sum >= n) break;
  }
  return answer[n - 1].join("");
}

function permutation(arr, selectNum) {
  //중복 조합 계산 함수
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

function permutation(arr, selectNum, stop) {
  //중복 조합 계산 함수
  if (stop < 0) return result;

  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
    stop -= combineFix.length;
  });
  return result;
}

console.log(solution(6));
