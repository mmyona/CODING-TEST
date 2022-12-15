const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [arr.shift()];

  while (arr.length > 0) {
    let newArr = [];
    let target = arr.shift();
    while (result.length > 0) {
      if (result[0] < target) {
        newArr.push(result.shift());
      } else {
        newArr.push(target);
        target = -1;
        break;
      }
    }
    newArr.push(...result);
    if (target !== -1) newArr.push(target);
    result = [...newArr];
  }
  return result;
};

let output = insertionSort([3, 1, 21, 10, 2]);
console.log(output); // --> [1, 3, 21]
