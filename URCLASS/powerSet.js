const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [""];
  let arr = str.split("");
  arr = [...new Set(arr)];
  arr.sort();

  const combination = (start, arr) => {
    let returnArr = [start];
    if (arr.length !== 0) {
      let sumArr = combination(arr.shift(), arr);
      for (let i = 0; i < sumArr.length; i++) {
        returnArr.push(start + sumArr[i]);
      }
      returnArr.push(...sumArr);
    }
    return returnArr;
  };
  result.push(...combination(arr.shift(), arr));
  return result;
};

let output1 = powerSet("abc");
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet("jjump");
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
