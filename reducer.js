const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
//const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(sumWithInitial);
// expected output: 10

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3)); // [1,2,3]이 reduce 함수로 들어간다 => 6
console.log(sum(1, 2, 3, 4)); // [1,2,3,4]이 reduce 함수로 들어간다 =>10
