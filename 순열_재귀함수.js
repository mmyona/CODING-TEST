var answer = [];

const getPermutation = (arr, fixed) => {
  if (arr.length >= 1) {
    arr.forEach((el, index, origin) => {
      const newNum = fixed + el;
      const rest = [...origin];
      rest.splice(index, 1); //arr에서 arr[i]을 제외한 배열
      if (!answer.includes(+newNum)) {
        //중복되지 않으면 push
        answer.push(+newNum);
      }
      getPermutation(rest, newNum);
    });
  }
  return answer;
};

//실행
console.log(getPermutation([1, 2, 3], ""));
