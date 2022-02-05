let input = require('fs').readFileSync('question.txt').toString();

let length=input.length;
let result=[]; 
let i=0;
let left=''; //남은 글자들(10개 미만)

for(j=0;j+10<=length;j+=10){ //남은 글자 개수가 10개 미만이면 for문을 멈춘다.
    result[i]=input.substr(j,10);
    i++;
    left=input.substr(j+10);
}

for(let j=0;j<i;j++){
    console.log(result[j]);
}
if(left!==''){
    console.log(left); 
}