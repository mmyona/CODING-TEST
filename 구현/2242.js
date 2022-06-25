let input = require('fs').readFileSync('question.txt').toString();
let result='*';
let empty='';

for(let i=1;i<Number(input);i++){
    empty+=' '; //맨 처음 줄의 공백
}

for(let i=Number(input);i>0;i--){
    console.log(empty+result);
    result+='**' //*을 하나씩 늘려 나감
    empty=empty.slice(1); //공백을 하나씩 줄여 나감
}