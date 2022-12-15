function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    //arr의 한 요소 = fixed, 그 요소의 인덱스 = index, arr = orgin
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 arr
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지 arr에 대해서 조합(2개 요소)을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기

    // 문자열 형식으로 리턴
    attached.forEach((el) => {
      results.push(el.join(""));
    });

    // 그냥 배열 형식으로 리턴
    //results.push(...attached); // map이 리턴한 배열의 요소들을 -> 배열 spread syntax로 모두다 push
  });

  return results; // 결과 담긴 results return
}

console.log(getCombinations([1, 2, 3, 4, 5], 3));
