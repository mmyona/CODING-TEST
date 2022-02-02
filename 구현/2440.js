let input = require('fs').readFileSync('question.txt').toString();
let result=''
for(let i=0;i<Number(input);i++){
    result+='*'; //맨 처음 줄의 별
}

for(let i=Number(input);i>0;i--){
    console.log(result);
    result=result.slice(1); //별 개수를 하나씩 줄여 나감
}