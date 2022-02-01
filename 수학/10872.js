//팩토리얼

let input = require('fs').readFileSync('/dev/stdin').toString();

let sum=1;
for(let i=1;i<=Number(input);i++){
    sum*=i;
}

console.log(sum);

