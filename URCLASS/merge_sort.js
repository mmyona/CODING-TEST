const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let mid = parseInt(arr.length / 2);
  let first = arr.splice(0, mid);
  let sec = [...arr];
  let result = [];

  if (first.length > 1) {
    first = mergeSort(first);
  }
  if (sec.length > 1) {
    sec = mergeSort(sec);
  }

  while (first.length > 0 && sec.length > 0) {
    if (first[0] > sec[0]) {
      result.push(sec.shift());
    } else {
      result.push(first.shift());
    }
  }
  return [...result, ...first, ...sec];
};

let output = mergeSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
