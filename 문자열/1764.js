let input = require('fs').readFileSync('question.txt').toString().split('\n');

let num=input[0].split(' '); //차례로 n, m

let n=[];
let result=[];
input.splice(0,1);

n=input.slice(0,num[0]);
input.splice(0,num[0]);

for(let i=0;i<num[1];i++){
    if(n.indexOf(input[i])!==-1){
        result.push(input[i]);
    }
}

console.log(result.length+'\n'+result.join('\n'));

// 시간 초과 문제 해결 못함..