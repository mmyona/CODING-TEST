let input = require('fs').readFileSync('question.txt').toString().split('\n');

let num = Number(input[0]); //수의 개수
let arr = input[1].split(' ').map(x => Number(x)); //수
let result=0; //소수의 개수

function test(number){
    for(let i=number-1;i>1;i--){
        if(number%i===0){
            return 0;
        }
    }
    return 1;
}

for(let i=0;i<num;i++){
    if(arr[i]>1&&test(arr[i])){
        result++;
    }
}

console.log(result);

