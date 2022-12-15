function solution(orders, course) {
  var comb = [];
  var answer = [];

  for (let j = 0; j < course.length; j++) {
    console.log(j);
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].length >= course[j])
        comb[i] = getCombinations(orders[i].split(""), course[j]);
      //주문의 길이가 코스 길이보다 같거나 긴 경우만
      else continue;
    }
    console.log(comb);
    for (let h = 0; h < orders.length; h++) {
      for (let k = h + 1; k < orders.length; k++) {
        comb[h].forEach((el) => {
          if (comb[k].includes(el)) {
            if (!answer.includes(el)) answer.push(el); //중복이 아닌 경우에만 push
          }
        });
      }
    }
  }
  return answer;
}

function getCombinations(arr, selectNumber) {
  //조합을 만드는 함수
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 arr
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지 arr에 대해서 조합(2개 요소)을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    attached.forEach((el) => {
      results.push(el.join(""));
    });
  });

  return results;
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
