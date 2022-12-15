const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let stack = [];
  const midCheck = (arr1, arr2) => {
    let mid =
      arr1.length % 2 === 0 ? arr1.length / 2 - 1 : parseInt(arr1.length / 2);
    while (arr1.length !== 0 && arr2.length !== 0) {
      if (arr1[mid] <= arr2[0]) {
        stack.push(...arr1.splice(0, mid + 1));
      } else {
        if (mid === 0) break;
      }
      if (mid !== 0) mid = mid % 2 === 0 ? mid / 2 - 1 : parseInt(mid / 2);
    }
  };
  while (stack.length < k) {
    if (arr1[0] < arr2[0]) {
      midCheck(arr1, arr2);
    } else {
      midCheck(arr2, arr1);
    }
  }
  return stack[k - 1];
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3
