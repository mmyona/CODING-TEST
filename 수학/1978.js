let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]); //수의 개수
let arr = input[1].split(' ').map(x => Number(x)); //수
const result=[];

function test(number){
    for(let i=number;i<number;i--){
        if(number%i===0){
            return 0;
        }
    }
    return 1;
}

for(let i=0;i<=num;i++){
    if(test(arr[i])){
        result.push(arr[i]);
    }
}

console.log(result);

