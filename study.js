function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 0;
  let i = 0;

  while (k > 0) {
    result += parseInt(target / type[i]);
    target %= type[i];
    i++;
  }
}

let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

let output1 = ocean(100, [10, 20, 50]);
console.log(output1); // 10

let output2 = ocean(30, [5, 6, 7]);
console.log(output2); // 4
