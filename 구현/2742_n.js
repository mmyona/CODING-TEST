let input = require('fs').readFileSync('question.txt').toString();

const n = +input;
let answer = '';
for(i = n ; i > 0 ; i--) {
   answer += `${i}
   ` 
}
console.log(answer)


/*
for 문을 이용해 i를 max값으로 정하고 감소시킨 i값을 출력시키면 됩니다.

출력을 하나씩 해주면 시간 초과가 납니다. 

그래서 문자열에 결괏값과 개행 문자를 넣어 마지막에 출력해줘야 합니다.
*/