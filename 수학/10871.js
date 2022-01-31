var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//첫째 줄에는 N(정수 개수), X(max 값) 둘째 줄에는 정수 N개가 있다.
//이를 split 메서드를 이용하여 1차적으로 줄을 기준으로 나누고,

//공백을 기준으로 다시 한번 나눠준다.
var num = input[0].split(' ').map(x => Number(x));
var arr = input[1].split(' ').map(x => Number(x));
const answer = [];

for (let i = 0; i <= num[0]; i++) {
    if (num[1] > arr[i]) {
        answer.push(arr[i]);
    } 
}

console.log(answer.join(' '));