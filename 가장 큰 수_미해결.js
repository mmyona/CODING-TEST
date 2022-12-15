// 왜 에러 나는지 모르겠음 ㅠ

function solution(numbers) {
  var spl = [];
  var result = "";

  for (let i = 0; i < numbers.length; i++) {
    //한 자리 단위로 잘라서 spl 배열에 저장
    spl.push(String(numbers[i]).split(""));
  }

  spl.sort((a, b) => {
    //내림차순으로 정렬
    let i = 0;
    while (i < a.length && i < b.length) {
      if (Number(a[i]) > Number(b[i])) return -1; //바꾸지 않음
      else if (Number(a[i]) > Number(b[i])) return 1; //바꿈
      else {
        if (a[i + 1] === undefined || b[i + 1] === undefined) {
          if (a.length < b.length) {
            if (b[i + 1] == 0) return -1; // ex: 3, 30
            else return 1; // ex: 3, 34
          } else if (a.length > b.length) {
            if (a[i + 1] == 0) return 1; // ex: 30, 3
            else return -1; // ex: 34, 3
          } else if (a[i] === b[i]) return -1; //완전히 같은 경우 ex: 3, 3
        }
      }
      i++;
    }
  });
  spl.forEach((el) => (result += [...el].join(""))); //문자열로 바꿔서 리턴
  return result;
}

console.log(solution([0, 100, 1010, 1, 10, 112, 9, 90]));
