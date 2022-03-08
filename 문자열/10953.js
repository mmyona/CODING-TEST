let input = require('fs').readFileSync('question.txt').toString().trim().split('\n');

let num=input[0];
let nums=[];

input.splice(0,1); //배열의 첫 요소 제거

for(let i=0;i<num;i++){
    nums=input[i].toString().split(',');
    console.log(Number(nums[0])+Number(nums[1]));
}
