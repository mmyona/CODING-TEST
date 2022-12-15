function solution(arr) {
  var newArr = new Set(arr);
  newArr = [...newArr]; //중복을 제거
  var repeat = [];

  if (newArr.length === arr.length) return [-1];

  const check = (n) => {
    //중복된 수의 개수를 세어 주는 함수
    var result = [];
    result = arr.filter((el) => {
      return el === n;
    });
    return result.length;
  };

  newArr.forEach((el) => {
    if (check(el) > 1) repeat.push(check(el));
  });
  return repeat;
}

console.log(solution([1, 2, 3, 3, 3, 3, 4, 4]));
console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));
console.log(solution([3, 5, 7, 9, 1]));
