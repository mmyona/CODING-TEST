var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var arr = input[1].split('').map(x => Number(x));
//공백 없이 나열된 숫자들 -> split

let sum=0;
for(let i=0;i<Number(input[0]);i++){
    sum+=arr[i];
}

console.log(sum);