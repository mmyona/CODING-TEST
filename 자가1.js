function solution(arr) {
  var newArr = new Set(arr);
  newArr = [...newArr]; //중복을 제거한 배열
  var result = [];
  var compare = []; //arr과 비교하여 중복되는 수를 체크할 배열 (중복이 제거된 상태)

  for (let i = 0; i < newArr.length; i++) {
    //초기화
    result.push(0);
    compare.push({ idx: i, ratio: newArr[i] });
  }

  arr.sort((a, b) => a - b); //사전 순  if (arr.length === newArr.length) return [-1]; //아예 중복이 없는 경우으로 정렬
  compare.sort((a, b) => a.ratio - b.ratio);

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (compare[i].ratio === arr[j]) result[compare[i].idx]++;
    }
  }
  result = result.filter((el) => {
    //중복이 있어 배열 값이 2 이상인 것들만 filter
    return el > 1;
  });
  return result;
}

console.log(solution([1, 2, 3, 3, 3, 3, 4, 4]));
console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));
console.log(solution([3, 5, 7, 9, 1]));
