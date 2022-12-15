const uglyNumbers = function (n) {
  let arr = [1, 2, 3, 5];
  let ugly = [2, 3, 5];
  let i = 1;
  while (arr.length < n) {
    for (let k = 0; k < 3; k++) {
      let target = arr[i] * ugly[k];
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < target && target < arr[j + 1]) {
          arr = [...arr.splice(0, j + 1), target, ...arr];
          break;
        } else if (arr[j] < target && j === arr.length - 1) {
          arr = [...arr, target];
          break;
        }
      }
    }
    i++;
  }
  return arr[n - 1];
};

let result = uglyNumbers(15);
console.log(result); // --> 1
