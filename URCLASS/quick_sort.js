/*const quickSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let pivotIdx = parseInt(arr.length / 2);

  let small = [];
  let large = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[pivotIdx]) small.push(arr[i]);
    else if (arr[i] > arr[pivotIdx]) large.push(arr[i]);
  }
  if (small.length > 1) small = quickSort(small);
  if (large.length > 1) large = quickSort(large);

  return [...small, arr[pivotIdx], ...large];
};

let output = quickSort([3, 1, 21, 10, 5, 2]);
console.log(output); // --> [1, 3, 21]*/

//포인터 느낌으로 짜본 코드
const quickSort = function (arr) {
  let temp,
    lowCheck = false,
    highCheck = false;
  let pivot = arr[0];
  let low = 1; //pivot보다 큰 요소 찾는 포인터
  let high = arr.length - 1; //pivot보다 작은 요소 찾는 포인터
  if (arr.length === 1) return arr;
  else if (arr.length === 2) {
    if (arr[0] > arr[1]) return [arr[1], arr[0]];
    else return [arr[0], arr[1]];
  }
  while (low <= high) {
    if (arr[low] < pivot) low++;
    else lowCheck = true;
    if (arr[high] > pivot) high--;
    else highCheck = true;
    if (lowCheck && highCheck) {
      temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
      lowCheck = false;
      highCheck = false;
    }
  }
  arr[0] = arr[high];
  arr[high] = pivot;

  return [quickSort(arr.splice(0, high)), pivot, quickSort(arr.shift())];
};

let output = quickSort([3, 1, 21, 10, 5, 2]);
console.log(output);
